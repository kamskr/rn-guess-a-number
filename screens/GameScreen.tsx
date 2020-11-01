import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

interface GameScreenProps {
  userChoice: number;
}

const GameScreen: React.FC<GameScreenProps> = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  // In opposite to state -> ref will not rerender on change
  const currentLow = useRef<number>(1);
  const currentMax = useRef<number>(100);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentMax.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    setCurrentGuess(
      generateRandomBetween(
        currentLow.current,
        currentMax.current,
        currentGuess
      )
    );
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card customStyles={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={() => {
            nextGuessHandler("lower");
          }}
        ></Button>
        <Button
          title="GREATER"
          onPress={() => {
            nextGuessHandler("greater");
          }}
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
