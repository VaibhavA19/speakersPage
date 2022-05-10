import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import ReactPlaceHolder from "react-placeholder";
import useDataDelay, { REQUEST_STATUS } from "../hooks/useDataDelay";

function SpeakersList() {
    const { data: speakerData,
        updateData: updateRecord,
        requestStatus } = useDataDelay(data);

    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div className="text-danger">
                ERROR: <b>loading Speaker Data Failed {error}</b>
            </div>
        );
    }

    return (
        <div className="container">
            <ReactPlaceHolder
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={requestStatus === REQUEST_STATUS.SUCCESS}
            >
                <div className="row">
                    {
                        speakerData.map(function (speaker) {
                            return <Speaker key={speaker.id}
                                onFavoriteToggle={(doneCallBack) => updateRecord({ ...speaker, favorite: !speaker.favorite }, doneCallBack)}
                                {...speaker} />
                        })
                    }
                </div>
            </ReactPlaceHolder>
        </div>
    );
}

export default SpeakersList;