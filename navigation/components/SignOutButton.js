import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";
import { Pressable, Text, StyleSheet } from "react-native";

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user];

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>◀ Sign Out</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: -10,
    marginLeft: -40,
    top: 0,
    left: 0,
    zIndex: 9,
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default SignOutButton;
