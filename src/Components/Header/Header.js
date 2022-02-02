import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {useIsAuthenticated, useMsal} from "@azure/msal-react";
import {SignOutButton} from "../SignOutButton/SignOutButton";
import {SignInButton} from "../SignInButton/SignInButton";
import {NavigationBar} from "../NavigationBar/NavigationBar";

const Header = (props) =>{
    const {accounts} = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const name = accounts[0] && accounts[0].name;
    const info = "You are not signed in! Please sign in"
    return(<header>
                <Navbar className="container navigation navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="link-festo" href="#"><a className="headerHome" href="#">Home</a></Nav.Link>
                        </Nav>
                        <NavigationBar/>
                    </Navbar.Collapse>
                    <Nav className="log-in-festo" href="#">

                        {name}{ isAuthenticated ? <SignOutButton /> : <SignInButton />}
                    </Nav>
                        <a href="https://www.festo.com/us/en/" className="navigation__logo">
                            <img className="logo" src="https://www.festo.com/_ui/responsive/theme-lambda/fox/img/svg/logo_blue.svg" alt="#"/>
                        </a>
                </Navbar>
            </header>
    )
}
export default Header
