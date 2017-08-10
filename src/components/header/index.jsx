import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import ClassNames from 'classnames';

import Nav from './nav';

class Header extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
            is_menu_open: false,
            
        };
    }
    
    toggleMenu = () => {
        this.setState({is_menu_open:!this.state.is_menu_open});
    }
    render() {
       
        return (
            <nav id="site-nav-wrap" className="navbar navbar-default navbar-static-top" >
                <div className="col-lg-12">
                    <div className="navbar-header">
                        <button onClick={this.toggleMenu} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#site-nav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" target="_self" className="navbar-brand" activeClassName=''>
                            <img className="logo" src="../logo.png" />
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="site-nav">
                        <Nav togglemenu={this.toggleMenu}/>
                    </div>
                </div>
            </nav>
            
        );
    }
}

export default Header;
