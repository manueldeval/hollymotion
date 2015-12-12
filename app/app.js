import babelPolyfill from "babel-polyfill";

import React from "react";

import PlayerContainer from "./components/playercontainer";
import Header from "./components/header";
import Footer from "./components/footer";
import FilmList from "./components/filmlist";


import "font-awesome/css/font-awesome.css";
import "./css/main.css";

function fetchContentPromise(){
	const jsonUri = "https://raw.githubusercontent.com/manueldeval/hollymotion/master/content.json?timestamp="+new Date().getTime();
    return fetch(jsonUri)
      .then(response => response.json() )
      .then(data => data.content)
      .then(array => array.map(video => { video.autoplay = false ; return video;}));

}

function renderApp(videos){
	React.render(
	  <div>
	  	<Header/>
	  	<PlayerContainer video={{title : "ShowReel 2014",videoId :"84393923",autoplay: false,provider : "vimeo" }}/>
	  	<FilmList videos={videos}/>
	  	<Footer/>
	  </div>,
	  document.getElementById("app")
	);
}

function main(){
	fetchContentPromise().then(renderApp);
}

main();

			