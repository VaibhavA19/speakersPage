import SpeakersList from "./SpeakerList";
import Toolbar from "./Toolbar";
import { SpeakerFilterProvider } from "../contexts/speakerFilterContext";

function Speakers() {
  return (
    <div className="container-fluid">
      <SpeakerFilterProvider initialShowSessions={true}>
        <Toolbar/>
        <SpeakersList/>
      </SpeakerFilterProvider>
    </div>
  );
}

export default Speakers;