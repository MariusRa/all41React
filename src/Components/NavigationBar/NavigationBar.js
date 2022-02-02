import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

import { Nav, Navbar, Button,} from "react-bootstrap";

import { loginRequest } from "../../authConfig";
import {PageLayout} from "../ButtonsLayout/ButtonsLayout";

export const NavigationBar = () => {

    //const { instance, accounts } = useMsal();
    //const name = accounts[0] && accounts[0].name;



    /**
     * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
     * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
     * only render their children if a user is authenticated or unauthenticated, respectively.
     */
    return (
        <>
            <Navbar>
                  <PageLayout>
                      <div className="link-festo">
                          <a className="headerHome" href="/home">Home</a>
                      </div>
                    <AuthenticatedTemplate>
                        <div className="link-festo">
                            <a className="headerHome" href="/profile">TestProfile</a>
                        </div>
                        <div className="link-festo">
                            <a className="headerHome" href="/hello">TestAPI</a>
                        </div>
                    </AuthenticatedTemplate>
                    <UnauthenticatedTemplate>

                    </UnauthenticatedTemplate>
                </PageLayout>
            </Navbar>
        </>
    );
};
