import React from "react";
import VimeoPlayer from "./vimeo";
import YoutubePlayer from "./youtube";


class Video extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    let player = "";
    if (this.props.type.toLowerCase() == 'youtube'){
      player = <YoutubePlayer videoId={this.props.videoId} autoPlay={this.props.autoPlay}/>
    } 
    if (this.props.type.toLowerCase() == 'vimeo'){
      player = <VimeoPlayer videoId={this.props.videoId} autoPlay={this.props.autoPlay}/>
    }
    return player;
  }
}

Video.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  autoPlay: React.PropTypes.bool.isRequired,
  type: React.PropTypes.string.isRequired
}

export default Video;
