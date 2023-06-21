import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Python from '../../assets/python.jpeg';
import Java from '../../assets/java.jpeg';
import AWS from "aws-sdk";

const quizData = [
    {
      id: 1,
      question: "1. Guess the programming language",
      image: Python,
      options: ["Java", "Python", "C++", "JavaScript"],
      correctAnswer: "Python",
    },
    {
      id: 2,
      question: "2. Guess the programming language",
      image: Java,
      options: ["Java", "Ruby", "Dart", "C#"],
      correctAnswer: "Java",
    },
    {
      id: 3,
      question: "3. Guess the programming language",
      image: Java,
      options: ["Java", "Ruby", "Dart", "C#"],
      correctAnswer: "Java",
    },
    {
        id: 4,
        question: "4. Guess the programming language",
        image: Python,
        options: ["Java", "Python", "C++", "JavaScript"],
        correctAnswer: "Python",
    },
];

AWS.config.update({
    region: "ap-southeast-1",
    accessKeyId: "AKIA6GJUZIGUTCJCTGKO",
    secretAccessKey: "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",
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default function CharadesScreen({navigation}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  let temp = 0;

  useEffect(() => {
    console.log("Current score:", score);
  }, [score]);
  
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  
    if (answer === quizData[currentQuestion].correctAnswer) {
      const updatedScore = score + 1; // Store the updated score in a separate variable
      setScore(updatedScore); // Update the score state
      console.log("Updated Score", updatedScore);
      temp = updatedScore;
    }
    console.log("temp", temp);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const item = {
        id: "Niggatron",
        point: temp, // Use the original score value here, not the updatedScore
      };
  
      fetch("https://ftqnr2uye8.execute-api.ap-southeast-1.amazonaws.com/points", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Request failed with status code " + response.status);
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
        console.log("Moving away");
        navigation.navigate("GameStatistics");
    }
  };
    return (
        <View style={styles.container}>
          <Text style={styles.header}>{quizData[currentQuestion].question}</Text>
          <Image style={styles.image} source={quizData[currentQuestion].image} />
    
          <View style={styles.buttonContainer}>
            <View style={styles.row}>
              {quizData[currentQuestion].options.slice(0, 2).map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button,
                    selectedAnswer === option && { backgroundColor: "#0386D0" },
                  ]}
                  onPress={() => handleAnswer(option)}
                >
                  <Text style={styles.buttonText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {quizData[currentQuestion].options.slice(2, 4).map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button,
                    selectedAnswer === option && { backgroundColor: "#0386D0" },
                  ]}
                  onPress={() => handleAnswer(option)}
                >
                  <Text style={styles.buttonText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginTop:40,
        fontSize:21,
        color:"#469FD1",
        fontWeight:"bold",
    },
    image: {
        width: 500, 
        height: 420, 
        resizeMode: 'contain',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
    },  
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent:'space-between',
    },
    button: {
      backgroundColor: '#0386D0',
      width: '48.5%',
      padding: 14,
      borderRadius: 10,
      alignItems: "center",
      borderColor:"white",
      borderWidth:2,
    },
    buttonText: {
        color:"white",
        fontSize:20,
        fontWeight: "bold",
    },
    spacing: {
        width: 10,
    },
  });