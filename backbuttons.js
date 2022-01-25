const netflix = window.netflix;
const app = netflix.appContext.getPlayerApp();

const actions = app.getActionCreators();
const api = app.getAPI();
const sessionId = Object.keys(app.getState().playerApp.sessionsById)?.[0];

const rewind3 = () => {
  console.log("doing it");
  actions.playerSeek({
    seekTime: api.getPlaybackStateBySessionId(sessionId).currentTime - 3000,
    sessionId,
  });
};

var threeback = document.createElement("button");
threeback.style.fontSize = "44px";
threeback.style.zIndex = "500";
threeback.style.position = "absolute";
threeback.style.height = "100px";
threeback.style.width = "100px";
threeback.style.backgroundColor = "white";
threeback.innerText = "3 back";
threeback.style.color = "black";
threeback.onclick = rewind3;
document.body.appendChild(threeback);

const rewind5 = () => {
  console.log("doing it");
  actions.playerSeek({
    seekTime: api.getPlaybackStateBySessionId(sessionId).currentTime - 5000,
    sessionId,
  });
};

var fiveback = document.createElement("button");
fiveback.style.fontSize = "44px";
fiveback.style.marginTop = "200px";
fiveback.style.zIndex = "500";
fiveback.style.position = "absolute";
fiveback.style.height = "100px";
fiveback.style.width = "100px";
fiveback.style.backgroundColor = "white";
fiveback.innerText = "5 back";
fiveback.style.color = "black";
fiveback.onclick = rewind3;
document.body.appendChild(fiveback);
