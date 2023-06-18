import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  Modal,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Icon from "react-native-vector-icons/FontAwesome";

export default function RewardDetailScreen({ navigation }) {
  const route = useRoute();
  const { image, featureText, pointsRequired } = route.params; // get reward details passed in route
  const [modalVisible, setModalVisible] = useState(false);

  const getModalHeight = () => {
    const deviceHeight = Dimensions.get("window").height;
    const statusBarHeight = getStatusBarHeight(); // Using a library for a cross-platform solution
    const desiredHeightPercent = Platform.OS === "ios" ? 64 : 70;
    return (deviceHeight - statusBarHeight) * (desiredHeightPercent / 100);
  };

  // Function to handle 'Confirm' button press
  const handleConfirmPress = () => {
    // Close the modal
    setModalVisible(false);

    // Show the "Successfully claimed" message
    setRewardClaimed(true);

    setTimeout(() => {
      navigation.navigate("Rewards");
      setRewardClaimed(false);
    }, 2000);
  };

  // Sample reward description
  const description =
    "Available while stocks last, not applicable for exchange for cash or refund. Maximum one redemption of reward per transaction. Once you have exchanged your points for this reward, it will be valid for 30 days.";

  const [readMore, setReadMore] = useState(false);
  const [rewardClaimed, setRewardClaimed] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Image style={styles.image} source={image} resizeMode="contain" />
        <Text style={styles.message}>Redeem {featureText}!</Text>
        <View style={styles.descriptionContainer}>
          <Text
            style={styles.description}
            numberOfLines={readMore ? undefined : 3}
          >
            {description}
          </Text>
          <TouchableOpacity onPress={() => setReadMore(!readMore)}>
            <Text style={styles.readMoreText}>
              {readMore ? "Less" : "More"}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.requirementTitle}>Requirements</Text>

        <View style={styles.requirementRow}>
          <Image
            source={require("../../assets/rewards_page/account-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.requirementText}>Login/Register</Text>
          <Image
            source={require("../../assets/rewards_page/tick-icon.png")}
            style={styles.icon}
          />
        </View>

        <View style={styles.requirementRow}>
          <Image
            source={require("../../assets/rewards_page/smiley-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.requirementText}>{pointsRequired} Points</Text>
          <Image
            source={require("../../assets/rewards_page/tick-icon.png")}
            style={styles.icon}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Redeem</Text>
        </TouchableOpacity>

        {/* modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.endView}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <View style={[styles.modalView, { height: getModalHeight() }]}>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Image
                      source={require("../../assets/rewards_page/arrow-down-icon.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.modalText}>Redeem Now?</Text>
                  <Image
                    source={require("../../assets/rewards_page/clock-icon.png")}
                    style={styles.clockIcon}
                  />
                  <View style={styles.modalLine} />

                  <View style={styles.modalContentText}>
                    <Text style={styles.bold}>Spend</Text>
                    <Text>{pointsRequired} Points</Text>
                  </View>
                  <View style={styles.modalLine} />

                  <View style={styles.modalContentText}>
                    <Text style={styles.bold}>
                      Tap only when ready to claim. Redeem in
                    </Text>
                    <Text>15 minutes</Text>
                  </View>

                  <View style={styles.modalLine} />

                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleConfirmPress}
                  >
                    <Text style={styles.buttonText}>Confirm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
      <View style={styles.rewardClaimedContainer} pointerEvents="none">
        {rewardClaimed && (
          <View style={styles.rewardClaimedMessage}>
            <Icon name="check" size={30} color="green" />
            <Text style={styles.rewardClaimedText}>Successfully claimed!</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "flex-start",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  image: {
    alignSelf: "center",
    width: 315,
    height: 273,
    marginBottom: 20,
  },
  message: {
    width: 324,
    fontFamily: "System",
    fontWeight: "bold",
    fontSize: 21,
    lineHeight: 20,
    color: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },
  descriptionContainer: {
    width: "100%",
    marginTop: 5, // Reduce margin to lessen gap
  },
  description: {
    fontFamily: "System",
    fontSize: 16,
    lineHeight: 22,
    color: "#000000",
  },
  readMoreText: {
    color: "#0386D0",
    marginTop: 5,
    marginRight: 5,
    textAlign: "right",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  clockIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  requirementTitle: {
    fontFamily: "System",
    fontWeight: "bold",
    fontSize: 18,
    color: "#000000",
    marginBottom: 10,
  },
  requirementRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  requirementText: {
    flex: 1,
    fontFamily: "System",
    fontSize: 16,
    color: "#000000",
    marginLeft: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0386D0",
    width: 300,
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 8,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  endView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Grey background
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  closeButton: {
    flex: 0,
    alignSelf: "center",
    marginBottom: 20,
  },
  closeButtonText: {
    color: "black",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalContentText: {
    textAlign: "left",
    fontSize: 16,
    width: "100%",
  },
  modalLine: {
    height: 1,
    backgroundColor: "grey",
    width: "100%",
    marginVertical: 10,
  },
  rewardClaimedContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 2, // Make sure the zIndex is higher than that of other components
  },

  rewardClaimedMessage: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    padding: 40,
    borderRadius: 10,
    elevation: 5, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 1 }, // For iOS
    shadowOpacity: 0.3, // For iOS
    shadowRadius: 1, // For iOS
  },

  rewardClaimedText: {
    marginLeft: 10,
    fontSize: 24,
  },
});
