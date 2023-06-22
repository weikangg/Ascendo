import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "Fill in API Key Here",
});

const openai = new OpenAIApi(configuration);

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      text: "Hello, how may I help you today?",
      user: false,
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingIndicator, setTypingIndicator] = useState(".");

  useEffect(() => {
    let intervalId;
    if (isTyping) {
      intervalId = setInterval(() => {
        setTypingIndicator((prev) => {
          if (prev.length === 3) return ".";
          return prev + ".";
        });
      }, 500);
    } else {
      clearInterval(intervalId);
      setTypingIndicator(".");
    }

    return () => clearInterval(intervalId);
  }, [isTyping]);

  useEffect(() => {
    if (isTyping) {
      const typingIndicatorId = "typing-indicator";
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: typingIndicatorId, text: "Snow Cat is typing", user: false },
      ]);
    } else {
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== "typing-indicator")
      );
    }
  }, [isTyping]);

  const sendMessage = async () => {
    if (inputText.trim() === "") return;

    const userMessage = { id: Date.now(), text: inputText, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    // Clear the inputText state immediately after sending the message
    const currentInputText = inputText;
    setInputText("");
    setIsTyping(true);

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: currentInputText,
        temperature: 0.6,
        max_tokens: 1000,
      });

      setIsTyping(false);
      const chatbotMessage = {
        id: Date.now() + 1,
        text: response.data.choices[0].text.trim(),
        user: false,
      };
      setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
    } catch (error) {
      setIsTyping(false);
      console.log("Error:", error);
    }
  };

  const renderMessage = ({ item }) => {
    if (item.user) {
      return (
        <View style={[styles.messageRow, styles.userMessageRow]}>
          <View style={[styles.messageContainer, styles.userMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
          <Image
            source={require("../../assets/rewards_page/profile-icon.png")}
            style={styles.userIcon}
          />
        </View>
      );
    } else {
      if (item.id === "typing-indicator") {
        return (
          <View style={[styles.messageRow, styles.aiMessageRow]}>
            <Image
              source={require("../.././assets/gacha/pets/snowCat.gif")}
              style={styles.petIcon}
            />
            <View style={[styles.messageContainer, styles.aiMessage]}>
              <Text style={styles.messageText}>
                {"Snow Cat is typing" + typingIndicator}
              </Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={[styles.messageRow, styles.aiMessageRow]}>
            <Image
              source={require("../.././assets/gacha/pets/snowCat.gif")}
              style={styles.petIcon}
            />
            <View style={[styles.messageContainer, styles.aiMessage]}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          </View>
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messageList}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputContainer}
        keyboardVerticalOffset={120} // This will offset the input by 50px from the bottom of the screen
      >
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          onSubmitEditing={sendMessage}
        />
        <Button title="Send" onPress={sendMessage} />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  messageList: {
    flexGrow: 1,
  },
  messageContainer: {
    padding: 8,
    borderRadius: 8,
    maxWidth: "90%",
  },
  messageRow: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "flex-start",
  },
  userMessageRow: {
    justifyContent: "flex-end",
  },
  aiMessageRow: {
    justifyContent: "flex-start",
  },
  userMessage: {
    backgroundColor: "#e6eaff",
  },
  aiMessage: {
    backgroundColor: "#f0f0f0",
  },
  petIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
    marginTop: 5,
  },
  userIcon: {
    width: 30,
    height: 30,
    marginLeft: 8,
    marginTop: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});

export default ChatbotScreen;
