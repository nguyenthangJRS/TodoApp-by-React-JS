import React, { Component } from 'react';
import '../component-css/header.css';

class  Header extends Component {
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-dark navbar-expand-md bg-danger">
                    <a className="navbar-brand"href="/"><i className="fa fa-drupal fa-lg"></i></a>
                    <button className="navbar-toggler collapsed"data-toggle="collapse"data-taget="#navbar-Menu">
                    <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse"id="navbar-Menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link"href="/">home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"href="/">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"href="/">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"href="/">Alient</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="jumbotron">
                    <h2>Wellcome to Todo App</h2>
                </div>
            </div>
         );
    }
}
 
export default Header ;