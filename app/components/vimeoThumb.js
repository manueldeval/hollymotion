import React from "react";

class VimeoThumb extends React.Component {
  constructor(props){
    super(props);
    this.state = { url : '' };
  }

  componentDidMount() {
    const jsonUri = "http://vimeo.com/api/v2/video/"+this.props.videoId+".json";
    fetch(jsonUri)
      .then(response => response.json() )
      .then(data => data[0].thumbnail_medium)
      .then(url => this.setState({ url }));
  }

  render() {
    return (
      <img src={this.state.url} onClick={this.props.onClick}/>
    );
  }
}

VimeoThumb.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  onClick:  React.PropTypes.func, 
}

VimeoThumb.defaultProps = {
  onClick: () => console.log("clicked.")
}

export default VimeoThumb;
