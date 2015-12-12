import React from "react";
import ThumbnailContainer from "./thumbnailcontainer";


class FilmList extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
  	return (
  		<div className="thumbs">
  			{ this.props.videos.map( video => {
  				return <ThumbnailContainer video={video}/>
  			})}
  		</div>
  	);
  }
}

FilmList.propTypes = {
  videos: React.PropTypes.array.isRequired
}

export default FilmList;
