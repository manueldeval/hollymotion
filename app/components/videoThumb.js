import React from "react";
import VimeoThumb from "./vimeoThumb";
import YoutubeThumb from "./youtubeThumb";


class VideoThumb extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    let thumb = "";
    if (this.props.type.toLowerCase() == 'youtube'){
      thumb = <YoutubeThumb videoId={this.props.videoId}/>
    } 
    if (this.props.type.toLowerCase() == 'vimeo'){
      thumb = <VimeoThumb videoId={this.props.videoId}/>
    }
    return thumb;
  }
}

VideoThumb.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired  
}

export default VideoThumb;
