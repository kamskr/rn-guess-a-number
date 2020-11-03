import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import { theme } from "../constants/theme";
import MainButton from "../components/MainButton";

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
        {/* image from assets */}
        <Image source={require("../assets/success.png")} style={styles.image} />
        {/* image from web */}
        {/* <Image
          source={{
            uri:
              "https://i.pinimg.com/originals/29/06/49/29064960c2b0e3b0ab3fa1e9005ee971.jpg",
          }}
          style={styles.image}
        /> */}
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{numberOfRounds}</Text> rounds to find
          number <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>

      <MainButton
        onPress={() => {
          handleRestart();
        }}
      >
        NEW GAME
      </MainButton>
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
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: theme.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
