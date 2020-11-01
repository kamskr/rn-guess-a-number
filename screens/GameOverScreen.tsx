import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

interface GameOverScreenProps {
  numberOfRounds: number;
  userNumber: number | undefined;
  handleRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  numberOfRounds,
  userNumber,
  handleRestart,
}) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {numberOfRounds}</Text>
      <Text>User number: {userNumber}</Text>
      <Button
        title="Restart game"
        onPress={() => {
          handleRestart();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
