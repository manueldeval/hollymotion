import ACTION_TYPE from "./constants"

function videoLoaded(videos){
	return {
		type: ACTION_TYPE.LIST_VIDEO_LOADED,
		videos: videos
	}
}

function videoFailed(){
	return {
		type: ACTION_TYPE.LIST_VIDEO_FAILED,
	}
}

function autoPlay(mode){
  if (mode){
    return {  type: ACTION_TYPE.AUTOPLAY_ON }
  } else {
    return {  type: ACTION_TYPE.AUTOPLAY_ON }
  }
}

function selectVideo(videoId){
  return {
    type: ACTION_TYPE.SELECT_VIDEO,
    videoId: videoId
  }
}


function loadVideos(){
  return (dispatch) => {
	  const jsonUri = "https://raw.githubusercontent.com/manueldeval/hollymotion/master/content.json?timestamp="+new Date().getTime();
    fetch(jsonUri)
      .then(response => response.json() )
      .then(data => data.content)
      .then(array => array.map(video => { video.autoplay = false ; return video;}))
      .then(videos => {
        dispatch(autoPlay(false));
      	dispatch(videoLoaded(videos));
      })
      .catch(error => {
        console.log("ERROR: ",error);
        dispatch(videoFailed());
      });
  };	
}

export { loadVideos , selectVideo}
