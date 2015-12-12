import React from "react";
import Header from "./header";
import PlayerContainer from "./playercontainer";
import VideoList from "./videolist";
import Footer from "./footer";
import { connect } from 'react-redux';  
import { selectVideo } from "../actions/videoactions";


class MainView extends React.Component {
  
  constructor(props){
    super(props);
  }

  newViewSelected(videoId){
  	this.props.dispatch(selectVideo(videoId));
  }


  render(){
  	return (
	  <div>
	  	<Header/>
	  	<PlayerContainer video={this.props.current} autoPlay={this.props.autoPlay}/>
	  	<VideoList videos={this.props.videos} onSelected={this.newViewSelected.bind(this)} />
	  	<Footer/>
	  </div>
  	);
  }
}

function mapStateToProps(state){
	console.log("STATE",state);
	return {
 		videos: state.list,
 		autoPlay : state.autoplay,
		current : state.current
	}
}


export default connect(mapStateToProps)(MainView);
