import "../css/common.css";
import player from "@vimeo/player";
import throttle from "lodash.throttle";

const TIME_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');

const player = new player(iframe);

const onPlay = function (data) {
    const strData = JSON.stringify(data);
    localStorage.setItem(TIME_KEY, strData);
    player.on("timeupdate", throttle(onPlay, 1000));
}

function playBackResult() {
    if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
        return;
    }

    const paused = JSON.parce(localStorage.getItem(TIME_KEY))["seconds"];
    if (paused) {
        player 
            .setCurrentTime(paused)
            .then(function (seconds) {})
            .catch(function (error) {
                switch (error.name) {
                    case "Error":
                        breack;
                    default:
                        "new problem, plaese wait a few minutes"
                        breack;
            }
        })
    }
}


