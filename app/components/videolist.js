import React from "react";
import ThumbnailContainer from "./thumbnailcontainer";


class VideoList extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
  	return (
  		<div className="thumbs">
  			{ this.props.videos.map( video => {
  				return <ThumbnailContainer video={video} onSelected={ this.props.onSelected }/>
  			})}
  		</div>
  	);
  }
}

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired,
  onSelected: React.PropTypes.func.isRequired
}

export default VideoList;
