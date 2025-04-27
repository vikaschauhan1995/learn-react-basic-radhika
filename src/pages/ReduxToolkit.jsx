import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, userSlice } from "../redux/features/user/userSlice";


const ReduxToolkit = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.userState);
    console.log("userState=>", userState);
    const {incrementCount } = userSlice.actions;
    const clickCounter = () => {
        dispatch(incrementCount());
    }
    useEffect(() => {
        dispatch(fetchUser());
    }, []);
    return <div>
        <h1>Users</h1>
        <div>userCount: {userState.count}</div>
        <button onClick={clickCounter}>increment By 1</button>
        <ul>
        {userState?.loading ? "Loading...." : userState?.users?.map(user => {
            return <li key={user?.id}>{user?.name}</li>
        })}
        </ul>
    </div>
}

export default ReduxToolkit;