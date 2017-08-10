import React, { Component, PropTypes } from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, IndexLink } from 'react-router'
import jQuery from 'jquery';
import Classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import {browserHistory as history} from 'react-router';
import './nav.scss'
import request from 'superagent';


class Nav extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            notification:[]
        };
    }

    
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount(){
     
    }

    toggleMenu =()=>{
        this.props.togglemenu()
    }

    render() {
        var _this = this;
        return (
            <ul className="nav navbar-nav navbar-right" ref="mainNav">
                <li className={Classnames({"active": this.context.router.isActive('/merchant', true)})}>
                    <Link onClick={this.toggleMenu} to="/page1">Page 1</Link>
                </li>

                <li className={Classnames({"active": this.context.router.isActive('/offer', true)})}>
                    <Link onClick={this.toggleMenu} to="/page2">Page 2</Link>
                </li>

               



                <li className="">
                    <Link onClick={this.logout} to="/list">Logout</Link>
                </li>

            </ul>
        );
    }
};

Nav.propTypes = {   
    togglemenu: React.PropTypes.func,
    
};
Nav.contextTypes = {
    router: React.PropTypes.func.isRequired
  }

export default Nav;
