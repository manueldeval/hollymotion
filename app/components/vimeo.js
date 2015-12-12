import React from "react";

class Vimeo extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    const frameStyle = { border: 0 };
    const url = "//player.vimeo.com/video/"+this.props.videoId+"?title=0&amp;byline=0&amp;badge=0&amp;portrait=0&amp;autoplay="+this.props.autoPlay;

    return (
      <iframe 
        src={url}
        className="video_player" 
        style={frameStyle}
        frameBorder="0"
        allowFullScreen>
      </iframe> 
    );
  }
}

Vimeo.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  autoPlay: React.PropTypes.bool.isRequired
}

export default Vimeo;
