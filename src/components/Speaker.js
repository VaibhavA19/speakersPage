import { useContext, useState } from "react";
import { SpeakerFilterContext } from "../contexts/speakerFilterContext";

function Session({ room, title }) {
    return (
        <div className="card bg-light text-dark" >
            <div className="card-body text-muted">
                <span >
                    {title} <strong> Room: {room.name} </strong>
                </span>
            </div>
        </div>
    )
}

function SessionList({ sessions }) {
    return (
        <div className="container">
            {
                sessions.map(function (session) {
                    return <Session key={session.id} {...session} />
                })
            }
        </div>
    );
}

function SpeakerImage({ id, fName, lName }) {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center m-0">
            <img
                className="card-img-top"
                src={`/images/speaker-${id}.jpg`}
                alt={`${fName} ${lName}`}
            />
        </div>
    )
}

function SpeakerDemographics({
    first,
    last,
    bio,
    company,
    twitterHandle
}) {
    return (
        <div className="conatiner m-0 p-0">
            <h5 className="card-title">{first} {last}</h5>
            <p className="card-text">{bio}</p>
            <div className="d-flex">
                {company}<br />
                {twitterHandle}
            </div>
        </div>
    );
}

function SpeakerFavorite({ favorite, onFavoriteToggle }) {
    const [inTransition, setInTransition] = useState(false);
    function doneCallBack() {
        setInTransition(false);
    }
    return (
        <div className="action padB1">
            <span onClick={ () => {
                 setInTransition(true);
                 onFavoriteToggle(doneCallBack)
                 }
            }>
                <i
                    className={
                        inTransition ? "fas fa-circle-notch fa-spin": favorite ? "fa fa-star orange" : "fa fa-star-o orange"
                    }
                />{" "}
                Favorite{" "}
            </span>
        </div>
    );
}

function Speaker({ onFavoriteToggle,
    id,
    first,
    last,
    company,
    bio,
    favorite,
    twitterHandle,
    sessions }) {

    const { showSessions } = useContext(SpeakerFilterContext);

    return (
        <div
            key={id}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"
        >
            <div className="card p-1 mt-2 ml-2">
                <div className="card-body p-1">
                    <SpeakerImage id={id} fName={first} lName={last} />
                    <SpeakerFavorite favorite={favorite} onFavoriteToggle={onFavoriteToggle}/>
                    <SpeakerDemographics
                        first={first}
                        last={last}
                        company={company}
                        bio={bio}
                        twitterHandle={twitterHandle}
                    />
                </div>
                { showSessions === true? <SessionList sessions={sessions} />: null }
            </div>
        </div>
    );
}


export default Speaker;