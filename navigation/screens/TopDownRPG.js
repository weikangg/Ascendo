import React, { useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const tileSize = 40;

const GameScreen = () => {
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

    const movePlayer = (direction) => {
        switch (direction) {
            case "up":
                setPlayerPosition({
                    ...playerPosition,
                    y: playerPosition.y - 1,
                });
                break;
            case "down":
                setPlayerPosition({
                    ...playerPosition,
                    y: playerPosition.y + 1,
                });
                break;
            case "left":
                setPlayerPosition({
                    ...playerPosition,
                    x: playerPosition.x - 1,
                });
                break;
            case "right":
                setPlayerPosition({
                    ...playerPosition,
                    x: playerPosition.x + 1,
                });
                break;
            default:
                break;
        }
    };

    const renderMap = () => {
        const map = [];

        for (let y = 0; y < screenHeight / tileSize; y++) {
            for (let x = 0; x < screenWidth / tileSize; x++) {
                const tileStyle = {
                    position: "absolute",
                    left: x * tileSize,
                    top: y * tileSize,
                    width: tileSize,
                    height: tileSize,
                    backgroundColor: "#DDD",
                    borderWidth: 1,
                    borderColor: "#AAA",
                };

                map.push(<View key={`${x},${y}`} style={tileStyle} />);
            }
        }

        return map;
    };

    const renderPlayer = () => {
        const playerStyle = {
            position: "absolute",
            left: playerPosition.x * tileSize,
            top: playerPosition.y * tileSize,
            width: tileSize,
            height: tileSize,
            backgroundColor: "red",
        };

        return <View style={playerStyle} />;
    };

    return (
        <View style={styles.container}>
            {renderMap()}
            {renderPlayer()}
            <TouchableOpacity
                style={styles.upButton}
                onPress={() => movePlayer("up")}
            />
            <TouchableOpacity
                style={styles.downButton}
                onPress={() => movePlayer("down")}
            />
            <TouchableOpacity
                style={styles.leftButton}
                onPress={() => movePlayer("left")}
            />
            <TouchableOpacity
                style={styles.rightButton}
                onPress={() => movePlayer("right")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upButton: {
        position: "absolute",
        bottom: 0,
        left: screenWidth / 2 - 20,
        width: 40,
        height: 40,
        backgroundColor: "green",
    },
    downButton: {
        position: "absolute",
        bottom: 50,
        left: screenWidth / 2 - 20,
        width: 40,
        height: 40,
        backgroundColor: "green",
    },
    leftButton: {
        position: "absolute",
        bottom: 25,
        left: screenWidth / 2 - 60,
        width: 40,
        height: 40,
        backgroundColor: "green",
    },
    rightButton: {
        position: "absolute",
        bottom: 25,
        left: screenWidth / 2 + 20,
        width: 40,
        height: 40,
        backgroundColor: "green",
    },
});

export default GameScreen;
