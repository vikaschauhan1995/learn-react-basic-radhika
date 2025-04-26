import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/features/user/userSlice";


const ReduxToolkit = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.userState);
    console.log("userState=>", userState);
    useEffect(() => {
        dispatch(fetchUser());
    }, []);
    return <div>
        <h1>Users</h1>
        <ul>
        {userState?.loading ? "Loading...." : userState?.users?.map(user => {
            return <li key={user?.id}>{user?.name}</li>
        })}
        </ul>
    </div>
}

export default ReduxToolkit;