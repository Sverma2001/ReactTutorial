import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    lightPurpleNavbar: {
        backgroundColor: 'purple'
    }
};

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fw-bold" style={styles.lightPurpleNavbar}>
            <div className="container-fluid">
                <a className="navbar-brand" href="https://react.dev" target='_blank' rel="noreferrer">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to='/#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Contact
                            </Link>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://facebook.com/Sachinkumarverma2001" target="_blank" rel="noreferrer">FaceBook</a></li>
                                <li><a className="dropdown-item" href="https://linkedin.com/in/sachin-kumar-verma" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="https://instagram.com/sachinkumarverma2001" target="_blank" rel="noreferrer">Instagram</a></li>
                            </ul>
                        </li>
                    </ul>
                    {props.searchbar ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form> : 'No searchbar'}
                </div>
            </div>
        </nav>
    );
}
