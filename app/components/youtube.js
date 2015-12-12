import React from "react";

class Youtube extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    const frameStyle = { border: 0 };
    const url = "http://www.youtube.com/embed/"+this.props.videoId+"?autoplay="+(this.props.autoPlay?1:0);

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

Youtube.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  autoPlay: React.PropTypes.bool.isRequired
}

export default Youtube;
