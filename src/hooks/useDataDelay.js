import { useEffect, useState } from "react";

export const REQUEST_STATUS = {
    LOADING: "loading",
    ERROR: "error",
    SUCCESS: "success"
};

function useDataDelay(initialData){
    const delayTime = 2000;
    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms)) ;

    useEffect(() => {
        (async function(){
            await delay(delayTime);
            setRequestStatus(REQUEST_STATUS.SUCCESS);
            setData(initialData);
        })();
    },[]);


    function updateData(recordToUpdate, doneCallBack) {
        console.log(recordToUpdate);
        const updatedData = data.map(item => item.id === recordToUpdate.id ? recordToUpdate : item );
        console.log(updatedData);
        (async function(){
            try{
                await delay(delayTime);
                setData(updatedData);
                if(doneCallBack){
                    doneCallBack();
                }
            } catch(error){
                console.log("error occured", error);
            }
        })();
    }

    return {
        data,
        updateData,
        requestStatus
    };
}

export default useDataDelay;