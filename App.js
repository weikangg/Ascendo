import React, { useState } from "react";
import MainContainer from "./navigation/MainContainer";
import { StatusBar } from "expo-status-bar";
import Authen from "./navigation/authen/Auth";
import { NavigationContainer } from "@react-navigation/native";

import { Amplify } from "aws-amplify";
import awsExports from "./src/aws-exports";

Amplify.configure(awsExports);

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthentication = (authenticated) => {
        setIsAuthenticated(authenticated);
    };
    return (
        <>
            <NavigationContainer>
                <StatusBar style="auto" />
                {!isAuthenticated ? (
                    <Authen handleAuthentication={handleAuthentication} />
                ) : (
                    <MainContainer
                        handleAuthentication={handleAuthentication}
                    />
                )}
            </NavigationContainer>
        </>
    );
}

export default App;
