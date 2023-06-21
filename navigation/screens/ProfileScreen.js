import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import { Auth } from "aws-amplify";

const ProfilePage = ({ navigation, handleAuthentication }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    // Get the authenticated user
    useEffect(() => {
        const getUser = async () => {
            const user = await Auth.currentAuthenticatedUser();
            setUser(user);
        };

        getUser();
    }, []);

    const userProfile = {
        image: require("../../assets/rewards_page/ascendo_logo.png"),
        username: "John.Doe",
        name: "John Doe",
        friendCount: 100,
        followerCount: 500,
        followingCount: 200,
        level: 10,
        experiencePoints: 2500,
        currentlyWearing: "Cool Hat",
        totalExperiencePoints: 5000,
    };

    const progress =
        (userProfile.experiencePoints / userProfile.totalExperiencePoints) *
        100;

    const handleFriendsPress = ({ navigation }) => {
        // Handle friends press logic
        navigation.navigate("FollowerList");
    };

    const handleFollowersPress = ({ navigation }) => {
        // Handle followers press logic
        navigation.navigate("FollowerList");
    };

    const handleFollowingPress = ({ navigation }) => {
        // Handle following press logic
        navigation.navigate("FollowingList");
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await Auth.signOut();
            handleAuthentication(false);
        } catch (error) {
            console.error("Error signing out: ", error);
        } finally {
            setLoading(false);
        }
    };
    const postsData = [
        {
            id: "1",
            postTitle: "Post 1",
            postImage: require("../../assets/rewards_page/ascendo_logo.png"),
        },
        {
            id: "2",
            postTitle: "Post 2",
            postImage: require("../../assets/rewards_page/ascendo_logo.png"),
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.postItem}>
            <Text style={styles.postText}>{item.postTitle}</Text>
            <View style={styles.postImageContainer}>
                <Image source={item.postImage} style={styles.postImage} />
            </View>
            <Text style={styles.postText}>{item.postText}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                contentContainerStyle={styles.container}
                data={[0]} // Dummy data to make the FlatList render a single item
                renderItem={() => (
                    <>
                        <Image
                            source={userProfile.image}
                            style={styles.profileImage}
                        />
                        <View style={styles.nameContainer}>
                            <Text style={styles.username}>
                                {user.attributes.given_name}{" "}
                                {user.attributes.family_name}
                            </Text>
                            <Text style={styles.name}>@{user.username}</Text>
                        </View>
                        <View style={styles.statsContainer}>
                            <TouchableOpacity
                                onPress={() =>
                                    handleFriendsPress({ navigation })
                                }
                                style={styles.statsItem}
                            >
                                <Text style={styles.statsText}>
                                    {userProfile.friendCount}
                                </Text>
                                <Text style={styles.statsLabel}>Friends</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    handleFollowersPress({ navigation })
                                }
                                style={styles.statsItem}
                            >
                                <Text style={styles.statsText}>
                                    {userProfile.followerCount}
                                </Text>
                                <Text style={styles.statsLabel}>Followers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    handleFollowingPress({ navigation })
                                }
                                style={styles.statsItem}
                            >
                                <Text style={styles.statsText}>
                                    {userProfile.followingCount}
                                </Text>
                                <Text style={styles.statsLabel}>Following</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>
                                Level: {userProfile.level}
                            </Text>
                            <Text style={styles.infoText}>
                                Experience Points:{" "}
                                {userProfile.experiencePoints}
                            </Text>
                            <View style={styles.progressBar}>
                                <View
                                    style={[
                                        styles.progress,
                                        { width: `${progress}%` },
                                    ]}
                                ></View>
                            </View>
                        </View>
                        <FlatList
                            data={postsData}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            horizontal // Add horizontal prop for horizontal scroll view
                            showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
                            style={styles.postsContainer} // Add style to adjust container width
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() =>
                                    navigation.navigate("ProfileDetails")
                                }
                            >
                                <Text style={styles.button_text}>
                                    Customize Avatar
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.logOutButton}
                                onPress={handleLogout}
                            >
                                <Text style={styles.button_text}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
                keyExtractor={() => "profile-key"} // Provide a unique key for the FlatList item
            />
            {loading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text>Loading...</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingVertical: 20,
    },
    profileImage: {
        width: 300,
        height: 180,
        marginBottom: 10,
        left: 10,
    },
    nameContainer: {
        alignItems: "center",
    },
    username: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10,
    },
    name: {
        fontSize: 14,
        marginBottom: 10,
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    statsItem: {
        alignItems: "center",
    },
    statsText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    statsLabel: {
        fontSize: 14,
    },
    infoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    progressBar: {
        width: "100%",
        height: 10,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
    },
    progress: {
        height: "100%",
        backgroundColor: "#42a5f5",
        borderRadius: 5,
    },
    postItem: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    postText: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: "center",
    },
    postImageContainer: {
        width: 150,
        height: 150,
        marginBottom: 1,
    },
    postImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    postsContainer: {
        flexGrow: 0,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#0386D0",
        width: 300,
        padding: 14,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 2,
        alignItems: "center",
        marginBottom: 8,
    },
    logOutButton: {
        backgroundColor: "#ff2626",
        width: 300,
        padding: 14,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 2,
        alignItems: "center",
        marginBottom: 8,
    },
    button_text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    buttonContainer: {
        position: "relative",
        left: 10,
        width: "100%",
        alignItems: "center",
    },
    loadingContainer: {
        ...StyleSheet.absoluteFill,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default ProfilePage;
