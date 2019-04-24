import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="" style={{color:"red"}}>Huy.VT</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><NavLink activeClassName="active" to="/">Trang Chủ</NavLink></li>
                        <li><NavLink activeClassName="active" to="/san-pham">Sản Phẩm</NavLink></li>
                        <li><NavLink activeClassName="active" to="/lien-he">Liên Hệ</NavLink></li>
                    </ul>
                    </div>{/* /.nav-collapse */}
                </div>{/* /.container */}
            </nav>
        );
    }
}

export default Nav;