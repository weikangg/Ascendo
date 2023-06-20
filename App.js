import React, { useState } from "react";
import MainContainer from "./navigation/MainContainer";
import { StatusBar } from "expo-status-bar";
import Auth from "./navigation/auth/Auth";
import { NavigationContainer } from "@react-navigation/native";

import { Amplify } from "aws-amplify";
import awsExports from "./src/aws-exports";
import SignOutButton from "./navigation/components/SignOutButton";
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";

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
          <Auth handleAuthentication={handleAuthentication} />
        ) : (
          <MainContainer handleAuthentication={handleAuthentication} />
        )}
      </NavigationContainer>
    </>
  );
}

export default withAuthenticator(App);
