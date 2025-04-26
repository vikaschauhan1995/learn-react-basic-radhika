import { combineReducers } from "@reduxjs/toolkit";
import userSlice from './features/user/userSlice';

export default combineReducers({
    userState: userSlice
});