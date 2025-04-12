import { combineReducers } from "@reduxjs/toolkit";
import { reducer as notesReducer } from './notesReducer';


export default combineReducers({
    notesReducer: notesReducer,
    notesReducer1: notesReducer,
    notesReducer2: notesReducer,
});