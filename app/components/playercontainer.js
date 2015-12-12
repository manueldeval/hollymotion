import React from "react";
import VideoPlayer from "./video";


class PlayerContainer extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
  	if (this.props.video.videoId){
	  	return (
			<div className="player_container" id="player">
				<div className="player">
					<VideoPlayer 
						type={this.props.video.provider} 
						videoId={this.props.video.videoId} 
						autoPlay={this.props.autoPlay}/>
					<div className="title">{this.props.video.title}</div>
				</div>
				
			</div>
	  	);
	} else { 
		return (<div className="player_container" id="player"></div>);
	}
  }
}

PlayerContainer.propTypes = {
  video: React.PropTypes.object.isRequired,
  autoPlay: React.PropTypes.bool.isRequired,
}

export default PlayerContainer;
