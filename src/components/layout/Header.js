import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Header(props) {
    const {
        branding
    } = props;
    return ( < nav className = "navbar navbar-expand-sm navbar-dark bg-danger mb - 3 py - 0 " >
        <
        div className = "container" >
        <
        a href = "/"
        className = "navbar-brand" > { branding } < /a> <div><ul className="navbar-nav mr-auto"> <
        li className = "nav-item" >
        <
        i className = "fas fa-home mb-2" > < /i> <
        Link to = "/"
        className = "nav-link." > Home < /Link> < /
        li >




        <
        li className = "nav-item" >
        <
        i className = "fas fa-plus mb-3" > < /i> <
        Link to = "/contact/add"
        className = "nav-link." > Add Contact < /Link> 


        <
        /li> <
        li className = "nav-item" >
        <
        i className = "fas fa-question mb-2" > < /i> <
        Link to = "/about"
        className = "nav-link." > About < /Link>


        <
        /li>



        <
        /
        ul > < /
        div > < /
        div >



        <
        /nav >



    );
}

Header.defaultProps = { branding: "My App" };
Header.propTypes = { branding: PropTypes.string.isRequired };
const headingStyle = { color: 'green', fontSize: '50px' };
export default Header;