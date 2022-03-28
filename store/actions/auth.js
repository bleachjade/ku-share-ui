import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationActions } from 'react-navigation'
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

const saveDataToStorage = (
    token,
    userId,
    expirationDate,
    displayName,
    briefInfo,
    phoneNumber,
    facebook,
    twitter,
    homeAddress,
    age,
    profileImage
  ) => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        token: token,
        userId: userId,
        expiryDate: expirationDate.toISOString(),
        displayName: displayName,
        briefInfo: briefInfo,
        phoneNumber: phoneNumber,
        facebook: facebook,
        twitter: twitter,
        homeAddress: homeAddress,
        age: age,
        profileImage: profileImage,
      })
    );
  };


  
  export const authenticate = (userId, token, displayName, userProfile) => {
      console.log("now authenticate")
      // NavigationActions.navigate({ routeName: 'DrawerMenu' });
    return {
      type: AUTHENTICATE,
      userId: userId,
      token: token,
      displayName: displayName,
      userProfile: userProfile,
    };
  };
  
  export const signup = (email, password) => {
    return async (dispatch) => {
      const response = await fetch("https://ku-share-backend.herokuapp.com/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (!response.ok) {
        // const errorResData = await response.json();
        // const errorId = errorResData.error.message;
        let message = "Something went wrong!";
        // if (errorId === "EMAIL_EXISTS") {
        //   message = "This email exists already!";
        // }
        throw new Error(message);
        console.log("error!");
      }
  
      const resData = await response.json();
      // console.log(resData);
      const userProfile = {
        briefInfo: resData.briefInfo,
        phoneNumber: resData.phoneNumber,
        facebook: resData.facebook,
        twitter: resData.twitter,
        homeAddress: resData.homeAddress,
        age: resData.age,
        profileImage: resData.profileImage,
        email: resData.email
      };
      // console.log(userProfile);
      
      dispatch(
        authenticate(
          resData.localId,
          resData.idToken,
          resData.displayName,
          userProfile
        )
      );
      
      const expirationDate = new Date(
        new Date().getTime() + parseInt("3600") * 1000
      );
      saveDataToStorage(
        resData.idToken,
        resData.localId,
        expirationDate,
        resData.displayName,
        resData.briefInfo,
        resData.phoneNumber,
        resData.facebook,
        resData.twitter,
        resData.homeAddress,
        resData.age,
        resData.profileImage
      );
    };
  };
  
  export const login = (email, password) => {
    return async (dispatch) => {
      const response = await fetch("https://ku-share-backend.herokuapp.com/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (!response.ok) {
        console.log("error!");
        const errorResData = await response.json();
        let message = errorResData.message;
        throw new Error(message);
      }
  
      const resData = await response.json();
      // console.log(resData);
      const userProfile = {
        briefInfo: resData.briefInfo,
        phoneNumber: resData.phoneNumber,
        facebook: resData.facebook,
        twitter: resData.twitter,
        homeAddress: resData.homeAddress,
        age: resData.age,
        profileImage: resData.profileImage,
        email: resData.email
      };
      console.log(userProfile);
      dispatch(
        authenticate(
          resData.localId,
          resData.idToken,
          resData.displayName,
          userProfile
        )
      );
      const expirationDate = new Date(
        new Date().getTime() + parseInt("3600") * 1000
      );
      saveDataToStorage(
        resData.idToken,
        resData.localId,
        expirationDate,
        resData.displayName,
        resData.briefInfo,
        resData.phoneNumber,
        resData.facebook,
        resData.twitter,
        resData.homeAddress,
        resData.age,
        resData.profileImage
      );
    };
  };

export const logout = () => {
  return { type: LOGOUT };
};