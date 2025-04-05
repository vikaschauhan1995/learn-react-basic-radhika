import { useRef, useState } from "react";


const UserRefComponent = () => {
    let initRefCount = 1;
    const usernameRef = useRef(initRefCount);
    const [usernameState, setUsernameState] = useState(1);
    console.log("usernameRef=>", usernameRef);
    console.log("usernameState=>", usernameState);
    const clickRefButton = () => {
        usernameRef.current = usernameRef.current + 1;
        console.log("usernameRef.current==>", usernameRef.current);
    }
    const clickStateButton = () => {
        setUsernameState(pre=> pre+1);
    }
    return <div>
        <p>usernameRef: <b>{usernameRef.current}</b> <button onClick={clickRefButton}>Click Ref</button></p>
        <p>usernameState: {usernameState} <button onClick={clickStateButton}>Click Ref</button></p>
    </div>
}

export default UserRefComponent;