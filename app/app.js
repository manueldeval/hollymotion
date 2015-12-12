// Polyfill
import babelPolyfill from "babel-polyfill";

// Redix and react
import React from "react";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

// My components
import MainView from "./components/mainview";
import videos from "./reducers/videos";
import { loadVideos } from "./actions/videoactions";

// Css
import "font-awesome/css/font-awesome.css";
import "./css/main.css";


function main(){
	// create a store that has redux-thunk middleware enabled
	const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
	// Create the store
	const store = createStoreWithMiddleware(videos);
	// Send the signal
	store.dispatch(loadVideos());

	// Render the view
	React.render(
	  <Provider store={store}>
	  	<MainView/>
	  </Provider>,
	  document.getElementById("app")
	);
}


main();

			