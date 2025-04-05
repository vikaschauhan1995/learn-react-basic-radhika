import { useEffect, useState } from "react";
import { getMobileList } from "../apis/getMobileList";


const Mobiles = () => {
    const [mobileList, setMobileList] = useState([]);
    const [isMobileDataLoading, setIsMobileDataLoading] = useState(false);
    const [getMobileDataError, setGetMobileDataError] = useState(null);
    // console.log("getMobileDataError=>", getMobileDataError);
    const getMobileData = async () => {
        try {
            setIsMobileDataLoading(true);
            const mobileList = await getMobileList();
            setMobileList(mobileList)
            setIsMobileDataLoading(false);
        } catch (error) {
            setGetMobileDataError(error?.message);
            setIsMobileDataLoading(false);
        }
    }
    useEffect(() => {
        getMobileData();
    }, []);
    return <div>
        {isMobileDataLoading ? "Loading" : mobileList?.map((mobile) => {
            return <p key={mobile?.id}>{mobile?.name}</p>
        })}
        {getMobileDataError ? getMobileDataError : null}
        {/* Mobiles List pages */}
    </div>
}

export default Mobiles;