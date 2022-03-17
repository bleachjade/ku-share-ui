import {
  ADD_NEW_LECTURE,
  REMOVE_LECTURE,
  SET_LECTURES,
} from "../actions/lecture";
import Lecture from "../../models/lecture";

const initialState = {
  prevLectures: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LECTURES:
      return {
        ...state,
        prevLectures: action.registration,
      };
    case ADD_NEW_LECTURE:
      let newState;
      const receivedUserId = action.userId;
      const title = action.lecture.title;
      const author = action.lecture.author;
      const description = action.lecture.description;
      const subject = action.lecture.subject;
      const professor = action.lecture.professor;
      const numberOfPages = action.lecture.numberOfPages;
      const thumbnail = action.lecture.thumbnail;
      const filePath = action.lecture.filePath;
      const slug = action.lecture.slug;
      const createdAt = action.lecture.createdAt;
      const updatedAt = action.lecture.updatedAt;
      const receivedId = action.id;
      const newLecture = new Lecture(
        receivedUserId,
        title,
        author,
        description,
        subject,
        professor,
        numberOfPages,
        thumbnail,
        filePath,
        slug,
        createdAt,
        updatedAt,
        receivedId
      );
      newState = {
        ...state,
        prevLectures: [...state.prevLectures, newLecture],
      };
      return newState;
    //   case REMOVE_BATTERY:
    //     return {
    //       ...state,
    //       prevLectures: state.prevLectures.filter(
    //         item => item.id !== action.batteryId
    //       ),
    //     };
  }
  return state;
};
