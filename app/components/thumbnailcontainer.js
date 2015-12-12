import React from "react";
import VideoThumb from "./videoThumb";


class ThumbnailContainer extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
  	return (
		<div className="thumbnail_container">
    		<div className="thumbnail">
				<VideoThumb  type={this.props.video.provider} videoId={this.props.video.videoId}/>
				<div className="title">
					<a href="#ShowReel 2014">{this.props.video.title}</a>
				</div>
				<div className="type">{this.props.video.type}</div>
			</div>
    	</div>
  	);
  }
}

ThumbnailContainer.propTypes = {
  video: React.PropTypes.object.isRequired
}

export default ThumbnailContainer;
