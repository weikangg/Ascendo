import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Python from '../../assets/python.jpeg';
import Java from '../../assets/java.jpeg';

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
  ];

export default function CharadesScreen({navigation}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);

        if (answer === quizData[currentQuestion].correctAnswer) {
        setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
          setCurrentQuestion(nextQuestion);
        } else {
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
      borderRadius: 5,
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