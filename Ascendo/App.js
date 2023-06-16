import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <MainContainer />
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
