import React from "react";

class YoutubeThumb extends React.Component {
  render() {
    const uri="//img.youtube.com/vi/"+this.props.videoId+"/2.jpg"
    return (
      <img src={uri} onClick={this.props.onClick}/>
    );
  }  
}

YoutubeThumb.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  onClick:  React.PropTypes.func, 
}

YoutubeThumb.defaultProps = {
  onClick: () => console.log("clicked.")
}

export default YoutubeThumb;
