import React from "react";

class Header extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
  	return (
	  	<header>
			<div className="logo">
				<div className="project"><a href="http://www.hollymotion.com/">Holly Motion</a></div>
			</div>
			<div className="author">
				<div className="name">pierre lafouge</div>
				<div className="activity">monteur // motion designer // paris</div>
			</div>
			<div className="contacts">
				<a href="cv_pierre_lafouge.pdf" >
	                <i className="fa fa-file-text-o fa-2x" style={{fontSize:"1.7em"}}></i>
	            </a>
	            <a href="mailto:pierre@hollymotion.com" >
	            	<i className="fa fa-envelope fa-2x"></i>
	            </a>
	            <a href="http://vimeo.com/hollymotion" >
	            	<i className="fa fa-vimeo-square fa-2x"></i>
	        	</a>
	            <a href="https://www.facebook.com/hollymotion1" >
	            	<i className="fa fa-facebook-square fa-2x"></i>
	            </a>
	            <a href="http://www.twitter.com/hollymotion4" >
	            	<i className="fa fa-twitter-square fa-2x"></i>
	            </a>    
	            <a href="http://fr.linkedin.com/in/pierrelafouge/" >
	            	<i className="fa fa-linkedin-square fa-2x"></i>
	            </a>        
			</div>
		</header>
  	);
  }
}

export default Header;


