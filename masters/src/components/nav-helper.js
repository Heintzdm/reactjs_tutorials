import React, {Component} from 'react';
import localLinks from 'local-links';
import app from 'ampersand-app';

class NavHelper extends Component {
  constructor(props){
    super(props);
  }

  onClick(event) {
    const pathname = localLinks.getLocalPathname(event);
    if (pathname) {
      event.preventDefault();
      app.router.history.navigate(pathname);
    }
  }

  render(){
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }

}





export default NavHelper
