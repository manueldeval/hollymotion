import React from "react";
import VideoPlayer from "./video";


class PlayerContainer extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
  	return (
		<div className="player_container" id="player">
			<div className="player">
				<VideoPlayer 
					type={this.props.video.provider} 
					videoId={this.props.video.videoId} 
					autoPlay={this.props.video.autoplay}/>
				<div className="title">{this.props.video.title}</div>
			</div>
			
		</div>
  	);
  }
}

PlayerContainer.propTypes = {
  video: React.PropTypes.object.isRequired
}

export default PlayerContainer;
