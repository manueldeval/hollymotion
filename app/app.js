import babelPolyfill from "babel-polyfill";

import React from "react";

import VideoThumb from "./components/videoThumb";
import VideoPlayer from "./components/video";
import Header from "./components/header";

import "font-awesome/css/font-awesome.css";
import "./css/main.css";

function main(){
	React.render(
	  <div>
	  	<Header/>
	  	<VideoThumb  type="vimeo" videoId="84393923"/>
	  	<VideoPlayer type="vimeo" videoId="84393923" autoPlay={false}/>

	  	<VideoThumb  type="youtube" videoId="M7lc1UVf-VE"/>
	  	<VideoPlayer type="youtube" videoId="M7lc1UVf-VE" autoPlay={false}/>
	  </div>,
	  document.getElementById("app")
	);
}

main();

