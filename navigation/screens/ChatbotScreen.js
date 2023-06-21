import React, { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = async () => {
    if (inputText.trim() === "") return;

    const userMessage = { id: Date.now(), text: inputText, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: inputText,
        temperature: 0.6,
      });

      const chatbotMessage = {
        id: Date.now() + 1,
        text: response.data.choices[0].text.trim(),
        user: false,
      };
      setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
    } catch (error) {
      console.log("Error:", error);
    }
    setInputText("");
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.user ? styles.userMessage : styles.aiMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

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
        keyboardVerticalOffset={100} // This will offset the input by 50px from the bottom of the screen
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
    marginVertical: 4,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#e6eaff",
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
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
