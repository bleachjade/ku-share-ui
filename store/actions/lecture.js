export const ADD_NEW_LECTURE = "ADD_NEW_LECTURE";
export const REMOVE_LECTURE = "REMOVE_LECTURE";
export const SET_LECTURES = "SET_LECTURES";
import Lecture from "../../models/lecture";

export const fetchLectures = () => {
  return async (dispatch, getState) => {
    try {
      const myUserId = getState().auth.userId;
      
      const response = await fetch(
        `https://ku-share-backend.herokuapp.com/lecture/fetch?userId=${myUserId}`
      );
      // const response = await fetch(
      //   `http://localhost:3001/lecture-local/fetch`
      // );
      console.log('the request is sent');

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      
      const resData = await response.json();

      // console.log('resData: ')
      // console.log(' ')
      // console.log(resData);

      let loadedLectures = [];

      // console.log(resData.fetchedLectures[0]);

      for (let i = 0; i < resData.fetchedLectures.length; i++){
        loadedLectures.push(
          new Lecture(
            resData.fetchedLectures[i].userId,
            resData.fetchedLectures[i].title,
            resData.fetchedLectures[i].author,
            resData.fetchedLectures[i].description,
            resData.fetchedLectures[i].subject,
            resData.fetchedLectures[i].section,
            resData.fetchedLectures[i].thumbnail,
            resData.fetchedLectures[i].filePath,
            resData.fetchedLectures[i].slug,
            resData.fetchedLectures[i].createdAt, //be careful here
            resData.fetchedLectures[i].updatedAt, //be careful here
            resData.fetchedLectures[i]._id
          )
        );
      }

      // console.log('loadedLectures')
      // console.log(' ')
      // console.log(loadedLectures);
      console.log('Lecture successfully fetched from backend')

      dispatch({
        type: SET_LECTURES,
        registration: loadedLectures,
      });
    } catch (err) {
      throw err;
    }
  };
};

// export const addNewLecture = (lecture) => {
//     return async (dispatch, getState) => {
//       const myToken = getState().auth.token;
//       const myUserId = getState().auth.userId;
//       const newInputValues = {userId: myUserId, ...lecture.inputValues};

//       const response = await fetch(
//         `http://localhost:3001/lecture/upload?auth=${myToken}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(newInputValues),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Please wait a little bit then submit again...");
//       }

//       const resData = await response.json();

//       dispatch({
//         type: ADD_NEW_LECTURE,
//         lecture: lecture.inputValues,
//         id: resData.name, //be careful here
//         userId: myUserId
//       });
//     };
//   };

// export const addNewLecture = (lecture) => {
//   return async (dispatch) => {
//     console.log('from addNewLecture action')
//     console.log(lecture);

//     dispatch({
//       type: ADD_NEW_LECTURE,
//       lecture: lecture,
//       id: "123", //be careful here
//       userId: "myUserId",
//     });
//   };
// };
