import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Image,
    TouchableOpacity,
    Modal,
    Alert,
    ActivityIndicator,
} from "react-native";
import Checkbox from "expo-checkbox";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker from "react-native-modern-datepicker";
import { Feather } from "react-native-vector-icons";
import { Auth } from "aws-amplify";

export default function Authen({ handleAuthentication }) {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [showAccountTypeModal, setShowAccountTypeModal] = useState(false);
    const [selectedAccountType, setSelectedAccountType] = useState("");
    const [isRegisterPage, setIsRegisterPage] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(""); // Track the email input
    const [password, setPassword] = useState(""); // Track the password input
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmationCode, setConfirmationCode] = useState("");
    const [loading, setLoading] = useState(false);

    const handleDateCancel = () => {
        setShowDatePicker(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date.toLocaleString().split(",")[0]);
    };

    const handleAccountTypeSelect = (type) => {
        setSelectedAccountType(type);
        setShowAccountTypeModal(false);
    };

    const handleRegisterConfirmationCode = () => {
        setModalVisible(false);
        confirmSignUp();
    };
    const handleSwitchToRegister = () => {
        setIsRegisterPage(true);
    };

    const handleSwitchToLogin = () => {
        setIsRegisterPage(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        setLoading(true);
        try {
            await Auth.signIn(email, password);
            handleAuthentication(true);
        } catch (error) {
            console.log("login login error", error);
            Alert.alert(
                "Invalid Login",
                "Please check your email and password."
            );
        } finally {
            setLoading(false); // Hide loading screen
        }
    };

    const handleRegister = async () => {
        setLoading(true); // Show loading screen
        try {
            await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    email: email,
                },
            });
            setModalVisible(true);
            // Optionally, you can automatically sign in the user after successful registration
        } catch (error) {
            Alert.alert(
                "Registration Error",
                error.message || "An error occurred during registration."
            );
        } finally {
            setLoading(false); // Hide loading screen
        }
    };

    useEffect(() => {
        // This function checks if the user is signed in and updates the state
        const checkUser = async () => {
            try {
                await Auth.currentAuthenticatedUser();

                handleAuthentication(true);
            } catch (error) {
                handleAuthentication(false);
            }
        };

        // Call the checkUser function when the component mounts
        checkUser();
    }, []);

    async function confirmSignUp() {
        setLoading(true);
        try {
            await Auth.confirmSignUp(email, confirmationCode);
        } catch (error) {
            console.log("error confirming sign up", error);
        } finally {
            setLoading(false); // Hide loading screen
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.header}>
                        {isRegisterPage ? "Register" : "Login"}
                    </Text>
                    <Text>
                        {isRegisterPage
                            ? "By registering you are agreeing to our Term and privacy policy."
                            : "Welcome to our login page."}
                    </Text>
                    <View style={styles.headerRow}>
                        <Pressable onPress={handleSwitchToLogin}>
                            <Text
                                style={
                                    !isRegisterPage
                                        ? styles.activeText
                                        : styles.inactiveText
                                }
                            >
                                Login
                            </Text>
                        </Pressable>
                        <Pressable onPress={handleSwitchToRegister}>
                            <Text
                                style={
                                    isRegisterPage
                                        ? styles.activeText
                                        : styles.inactiveText
                                }
                            >
                                Register
                            </Text>
                        </Pressable>
                    </View>
                </View>

                {isRegisterPage && (
                    <>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.input}
                                placeholder="First Name"
                            />
                            <View style={styles.gap} />
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                            />
                        </View>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email Address"
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(text) => setPassword(text)}
                            />
                        </View>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.input}
                                placeholder="Re-enter Password"
                            />
                        </View>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.input}
                                placeholder="Area Code"
                            />
                            <View style={styles.gap} />
                            <TextInput
                                style={styles.input}
                                placeholder="Contact Number"
                            />
                        </View>

                        <View
                            style={[
                                styles.row,
                                {
                                    borderBottomWidth: 1,
                                    borderBottomColor: "grey",
                                },
                            ]}
                        >
                            <TextInput
                                style={{
                                    flex: 1,
                                    paddingBottom: 10,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                }}
                                placeholder="Date of Birth"
                                value={selectedDate}
                                editable={false}
                            />
                            <TouchableOpacity
                                onPress={() => setShowDatePicker(true)}
                            >
                                <Icon name="calendar" size={20} color="gray" />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={[
                                styles.row,
                                {
                                    borderBottomWidth: 1,
                                    borderBottomColor: "grey",
                                },
                            ]}
                        >
                            <TextInput
                                style={{
                                    flex: 1,
                                    paddingBottom: 10,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                }}
                                placeholder="Account Type"
                                value={selectedAccountType}
                                editable={false}
                            />
                            <TouchableOpacity
                                onPress={() => setShowAccountTypeModal(true)}
                            >
                                <Icon
                                    name="chevron-down"
                                    size={20}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.row}>
                            <Pressable
                                style={styles.button}
                                onPress={handleRegister}
                            >
                                <Text style={styles.buttonText}>Register</Text>
                            </Pressable>
                        </View>
                    </>
                )}
                {!isRegisterPage && (
                    <>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email Address"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                        <View
                            style={[
                                styles.row,
                                {
                                    borderBottomWidth: 1,
                                },
                            ]}
                        >
                            <TextInput
                                style={[styles.input, { borderBottomWidth: 0 }]}
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity
                                onPress={togglePasswordVisibility}
                                style={{ marginLeft: 10 }}
                            >
                                <Feather
                                    name={showPassword ? "eye" : "eye-off"}
                                    size={20}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <Checkbox
                                style={{ marginRight: 0 }}
                                value={rememberPassword}
                                onValueChange={setRememberPassword}
                                color={rememberPassword ? "#4630EB" : undefined}
                            />
                            <Text style={{ marginLeft: -10, marginTop: 2 }}>
                                Remember Password
                            </Text>
                            <Pressable>
                                <Text
                                    style={{ color: "#0386D0", marginTop: 2 }}
                                >
                                    Forgot Password?
                                </Text>
                            </Pressable>
                        </View>
                        <View style={[styles.row, { marginTop: 40 }]}>
                            <Pressable
                                style={styles.button}
                                onPress={handleLogin}
                            >
                                <Text style={styles.buttonText}>Login</Text>
                            </Pressable>
                        </View>
                    </>
                )}
            </View>

            <View style={styles.bottom}>
                <Image
                    style={styles.backgroundImage}
                    source={require("../../assets/auth.png")}
                    resizeMode="cover"
                />
                <Image
                    style={[styles.backgroundImage, { height: "100%" }]}
                    source={require("../../assets/Subtract.png")}
                    resizeMode="stretch"
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showDatePicker}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DatePicker
                            mode="calendar"
                            onDateChange={handleDateChange}
                        />
                        <TouchableOpacity onPress={handleDateCancel}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                visible={showAccountTypeModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowAccountTypeModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => handleAccountTypeSelect("Employee")}
                        >
                            <Text style={styles.modalOptionText}>Employee</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => handleAccountTypeSelect("Employer")}
                        >
                            <Text style={styles.modalOptionText}>Employer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            Enter Confirmation Code
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmation Code"
                            keyboardType="numeric"
                            onChangeText={(text) => setConfirmationCode(text)}
                        />
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() =>
                                handleRegisterConfirmationCode(false)
                            }
                        >
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {loading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#469FD1" />
                    <Text>Loading...</Text>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        flexDirection: "column",
        alignItems: "center",
        margin: 50,
    },
    top: {
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    row: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 8,
    },
    input: {
        flex: 1,
        borderColor: "gray",
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    button: {
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: "#0386D0",
        flex: 1,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    headerRow: {
        width: "60%",
        justifyContent: "space-evenly",
        flexDirection: "row",
        margin: 8,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    gap: {
        width: 10,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    bottom: {
        flex: 0.3,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        height: "15%",
        alignItems: "center",
    },
    modalOption: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },
    modalOptionText: {
        fontSize: 18,
        color: "black",
    },
    activeText: {
        color: "#0386D0",
        textDecorationLine: "underline",
    },
    inactiveText: {
        textDecorationLine: "none",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: "90%",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
    },
    submitButtonText: {
        color: "white",
        fontSize: 16,
    },
    loadingContainer: {
        ...StyleSheet.absoluteFill,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});
