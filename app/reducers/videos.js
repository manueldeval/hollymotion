import ACTION_TYPE from '../actions/constants'

const initialState = {
	list: [],
	autoplay: false,
	current: {}
}

function updateVideoList(state,videos){
	let home = videos.find(video => video.home);
	if (home == null){
		home = videos[0];
	}
	return {
		list: videos,
		autoplay: false,
		current: home
	}
}

function updateAutoPlay(state,autoplay){
	state.autoplay = autoplay;
	return Object.assign({},state,{autoplay:autoplay});
}

function selectVideo(state,videoId){
	let video = state.list.find(video => video.videoId == videoId);
	console.log(video);
	if (video == null){console.log("not found", videoId);
		video = videos[0];
	}	
	return Object.assign({},state,{current: video,autoplay:true});
}

function videos(state = initialState, action){
	switch (action.type){
		case ACTION_TYPE.LIST_VIDEO_LOADED:
			return updateVideoList(state,action.videos);
		case ACTION_TYPE.AUTOPLAY_ON:
			return updateAutoPlay(state,true);
		case ACTION_TYPE.AUTOPLAY_OFF:
			return updateAutoPlay(state,false);
		case ACTION_TYPE.SELECT_VIDEO:
			return selectVideo(state,action.videoId);
		default:
			return state;
	}
}


export default videos;

