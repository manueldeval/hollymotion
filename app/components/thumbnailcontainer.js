import React from "react";
import VideoThumb from "./videoThumb";


class ThumbnailContainer extends React.Component {
  
  constructor(props){
    super(props);
  }

  onClick(){
    return this.props.onSelected(this.props.video.videoId);
  }

  render(){
  	return (
		<div className="thumbnail_container">
    		<div className="thumbnail">
				<VideoThumb type={this.props.video.provider} videoId={this.props.video.videoId} onClick={this.onClick.bind(this)}/>
				<div className="title">
					<a href="#ShowReel 2014" onClick={this.onClick.bind(this)} >{this.props.video.title}</a>
				</div>
				<div className="type">{this.props.video.type}</div>
			</div>
    	</div>
  	);
  }
}

ThumbnailContainer.propTypes = {
  video: React.PropTypes.object.isRequired,
  onSelected: React.PropTypes.func.isRequired  
}

export default ThumbnailContainer;
