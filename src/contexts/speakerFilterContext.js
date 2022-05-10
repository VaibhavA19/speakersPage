import { createContext, useState } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({ initialShowSessions, children }) {
    const { showSessions, setShowSessions } = useSpeakerFilter(initialShowSessions);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions }}>
            {children}
        </SpeakerFilterContext.Provider>
    );
}

export { SpeakerFilterProvider };