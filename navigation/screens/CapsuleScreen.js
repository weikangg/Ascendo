import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const CapsuleScreen = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [petIndex, setpetIndex] = React.useState(-1);
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        let timeout;
        if (isModalVisible) {
            timeout = setTimeout(() => {
                setShowImage(false);
            }, 2300); // Display the image for 3 seconds before switching
        }

        return () => clearTimeout(timeout);
    }, [isModalVisible]);

    const handleDispenseButton = () => {
        setIsModalVisible(true);
        if (petIndex === 3) {
            setpetIndex(0);
        } else {
            setpetIndex(petIndex + 1);
        }
    };

    return (
        <View
            style={[
                styles.background,
                { alignItems: "center", justifyContent: "center" },
            ]}
        >
            <View style={{ paddingTop: 50 }}>
                <View
                    style={{
                        width: "95%",
                        alignItems: "center",
                        borderWidth: 2,
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ fontSize: 24, marginTop: 10 }}>
                        <Ionicons name="logo-octocat" size={24} color="black" />{" "}
                        Pet Capsule Station 101{" "}
                        <Ionicons name="logo-octocat" size={24} color="black" />
                    </Text>
                    <Text style={{ fontSize: 15, margin: 10 }}>
                        Ever dreamed of owning special and exotic companions?
                        Simply press the button to dispense a pet. Pets rank
                        from common to uncommon,rare and legendary.
                    </Text>
                    <Text
                        style={{ fontSize: 15, marginTop: 0, marginBottom: 10 }}
                    >
                        Points cost: 1000{"  "}
                        <FontAwesome5 name="coins" size={24} color="black" />
                    </Text>
                </View>
            </View>

            <Image
                source={require("../.././assets/gacha/VendingMachine2.png")}
                style={styles.imageBackground}
                resizeMode="contain"
            />
            <TouchableOpacity
                onPress={handleDispenseButton}
                style={styles.vendingButton}
            >
                <Text style={styles.buttonFont}>{"     "}</Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={handleDispenseButton}>
                <Image
                    source={require("../.././assets/gacha/dispense.jpg")}
                    style={styles.dispenseImage}
                    resizeMode="contain"
                />
            </TouchableWithoutFeedback>
            <TouchableOpacity
                onPress={handleDispenseButton}
                style={styles.vendingButton}
            >
                <Text style={styles.buttonFont}>{"     "}</Text>
            </TouchableOpacity>
            <View>
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setShowAccountTypeModal(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            {showImage && (
                                <Image
                                    source={require("../.././assets/gacha/capsule-opening.gif")}
                                    style={[{ marginBottom: 100 }]}
                                />
                            )}
                            {petIndex === 2 && (
                                <>
                                    <Image
                                        //source={require("../.././assets/gacha/pets/andrew-tate.gif")}
                                        //source={require("../.././assets/gacha/pets/snowCat.gif")}
                                        //source={require("../.././assets/gacha/pets/superCat.gif")}
                                        source={require("../.././assets/gacha/pets/drowningDog.gif")}
                                        style={styles.petImage}
                                    />
                                    <Text style={styles.commonPet}>
                                        You got a common pet - Drowning Dog
                                    </Text>
                                </>
                            )}
                            {petIndex === 3 && (
                                <>
                                    <Image
                                        //source={require("../.././assets/gacha/pets/andrew-tate.gif")}
                                        //source={require("../.././assets/gacha/pets/snowCat.gif")}
                                        source={require("../.././assets/gacha/pets/superCat.gif")}
                                        //source={require("../.././assets/gacha/pets/drowningDog.gif")}
                                        style={styles.petImage}
                                    />
                                    <Text style={styles.uncommonPet}>
                                        You got an uncommon pet - Super Cat!
                                    </Text>
                                </>
                            )}
                            {petIndex === 0 && (
                                <>
                                    <Image
                                        //source={require("../.././assets/gacha/pets/andrew-tate.gif")}
                                        source={require("../.././assets/gacha/pets/snowCat.gif")}
                                        //source={require("../.././assets/gacha/pets/superCat.gif")}
                                        //source={require("../.././assets/gacha/pets/drowningDog.gif")}
                                        style={styles.petImage}
                                    />
                                    <Text style={styles.rarePet}>
                                        You got a rare pet - Snow Cat!!
                                    </Text>
                                </>
                            )}
                            {petIndex === 1 && (
                                <>
                                    <Image
                                        source={require("../.././assets/gacha/pets/whiteDragon.gif")}
                                        //source={require("../.././assets/gacha/pets/snowCat.gif")}
                                        //source={require("../.././assets/gacha/pets/superCat.gif")}
                                        //source={require("../.././assets/gacha/pets/drowningDog.gif")}
                                        style={[
                                            styles.petImage,
                                            { width: 150 },
                                        ]}
                                    />
                                    <Text style={styles.legendaryPet}>
                                        You got a legendary pet - White Dragon!
                                    </Text>
                                </>
                            )}

                            <TouchableOpacity
                                style={styles.modalOption}
                                onPress={() => {
                                    setIsModalVisible(false);
                                    setShowImage(true);
                                }}
                            >
                                <Text style={styles.modalOptionText}>
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "white",
    },
    imageBackground: {
        width: "100%",
        marginTop: -80,
    },
    vendingButton: {
        top: 385,
        left: 318,
        position: "absolute",
    },
    buttonFont: {
        fontSize: 20,
        fontWeight: "bold",
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
        height: "25%",
        alignItems: "center",
    },
    modalOption: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },
    modalOptionText: {
        marginTop: 15,
        fontSize: 18,
        color: "black",
    },
    petImage: {
        height: 100,
        width: 100,
        marginBottom: 10,
    },
    legendaryPet: {
        color: "red",
    },
    rarePet: {
        color: "blue",
    },
    uncommonPet: {
        color: "green",
    },
    commonPet: {
        color: "black",
    },
    dispenseImage: {
        marginTop: -80,
        width: "50%", // Adjust the size as needed
    },
});
export default CapsuleScreen;
