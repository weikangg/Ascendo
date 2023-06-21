import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";

const CapsuleScreen = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [petIndex, setpetIndex] = React.useState(-1);
    //const petIndex = Math.floor(Math.random() * 4);

    const handleDispenseButton = () => {
        setIsModalVisible(true);
        if (petIndex === 3) {
            setpetIndex(0);
        } else {
            setpetIndex(petIndex + 1);
        }
    };

    return (
        <View style={styles.background}>
            <Image
                source={require("../.././assets/gacha/VendingMachine2.png")}
                style={styles.imageBackground}
                resizeMode="contain"
            />
            <View>
                <TouchableOpacity
                    onPress={handleDispenseButton}
                    style={styles.vendingButton}
                >
                    <Text style={styles.buttonFont}>Dispense</Text>
                </TouchableOpacity>

                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setShowAccountTypeModal(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
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
                                        source={require("../.././assets/gacha/pets/andrew-tate.gif")}
                                        //source={require("../.././assets/gacha/pets/snowCat.gif")}
                                        //source={require("../.././assets/gacha/pets/superCat.gif")}
                                        //source={require("../.././assets/gacha/pets/drowningDog.gif")}
                                        style={styles.petImage}
                                    />
                                    <Text style={styles.legendaryPet}>
                                        You got a legendary pet - Andrew Tate!
                                    </Text>
                                </>
                            )}

                            <TouchableOpacity
                                style={styles.modalOption}
                                onPress={() => setIsModalVisible(false)}
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
        backgroundColor: "black",
    },
    imageBackground: {
        //resizeMode: "contain",
        height: "100%",
        width: "100%",
        alignSelf: "flex-start",
    },
    vendingButton: {
        marginTop: 100, // Adjust the value as needed
        alignSelf: "center",
        backgroundColor: "grey",
        borderRadius: 10,
        padding: 40,
        width: "50%",
        alignItems: "center",
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
});
export default CapsuleScreen;
