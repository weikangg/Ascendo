import React, { useState } from "react";
import MainContainer from "./navigation/MainContainer";
import { StatusBar } from "expo-status-bar";
import Auth from "./navigation/auth/Auth";
import { NavigationContainer } from "@react-navigation/native";

import Avatar from "./navigation/components/Avatar";

export default function App() {
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
                    <MainContainer
                        handleAuthentication={handleAuthentication}
                    />
                )}
            </NavigationContainer>
        </>
    );
}

// export default function App() {
//   return (
//     <MainContainer/>
//     // <View style={styles.container}>
//     //   <Text>Hello World!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
