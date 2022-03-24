export const ADD_NEW_LECTURE = "ADD_NEW_LECTURE";
export const REMOVE_LECTURE = "REMOVE_LECTURE";
export const SET_LECTURES = "SET_LECTURES";
import Lecture from "../../models/lecture";

export const fetchLectures = () => {
  return async (dispatch, getState) => {
    try {
      const myUserId = getState().auth.userId;
      const response = await fetch(
        `http://localhost:3001/lecture/fetch?userId=${myUserId}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      console.log(resData);
      const loadedLectures = [];

      for (const key in resData) {
        loadedLectures.push(
          new Lecture(
            resData[key].userId,
            resData[key].title,
            resData[key].author,
            resData[key].description,
            resData[key].subject,
            resData[key].section,
            resData[key].thumbnail,
            resData[key].filePath,
            resData[key].slug,
            resData[key].createdAt, //be careful here
            resData[key].updatedAt, //be careful here
            resData[key]._id
          )
        );
      }

      console.log(loadedLectures);

      dispatch({
        type: SET_LECTURES,
        registration: loadedLectures.filter((regis) => {
          //filter the ones user uploaded
          return regis.userId === myUserId;
        }),
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
