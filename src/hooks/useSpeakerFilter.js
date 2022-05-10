import { useState } from "react";


function useSpeakerFilter(initialShowSession) {
    const [showSessions, setShowSessions] = useState(initialShowSession);

    return {
        showSessions,
        setShowSessions
    };
}

export default useSpeakerFilter;
