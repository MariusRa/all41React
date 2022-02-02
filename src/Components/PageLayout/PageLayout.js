import {AuthenticatedTemplate, useIsAuthenticated} from "@azure/msal-react";
import "../../sass/Custom.scss"
import { NavigationBar } from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export const PageLayout = (props) => {


    /**
     * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
     * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
     * only render their children if a user is authenticated or unauthenticated, respectively.
     */
    return (
        <div className="container-fluid">
            <Header />
            <AuthenticatedTemplate>
                <Main />
            </AuthenticatedTemplate>
            <Footer />
        </div>
    )}
