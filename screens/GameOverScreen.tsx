import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

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
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>

      <BodyText>Number of rounds: {numberOfRounds}</BodyText>
      <BodyText>User number: {userNumber}</BodyText>
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
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 30,
  },
});

export default GameOverScreen;
