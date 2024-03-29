import React from "react";
import classes from './Navbar.module.css'

const NavBar = () => {
    return (
        <nav className={`${classes.nav}`}>
            <div>
                <a className = {`${classes.item} ${classes.active}`}>Profile</a>
            </div>

            <div>
                <a className = {classes.item}>Messages</a>
            </div>

            <div>
                <a className = {classes.item}>News</a>
            </div>

            <div>
                <a className = {classes.item}>Music</a>
            </div>

            <div>
                <a className = {classes.item}>Settings</a>
            </div>
        </nav>
    )
}
export default NavBar;