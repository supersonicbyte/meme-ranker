import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">MEMERanker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse show" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Create</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control mr-sm-2" id="navbar-search" type="text" placeholder="Search"></input>
                    </form>
                    <li className="nav-item">
                            <a className="nav-link" href="#">Sign up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log in</a>
                        </li>
                    </ul>
                    
                   
                </div>
            </nav>
        );
    }
}

export default Navbar;