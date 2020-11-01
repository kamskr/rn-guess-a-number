import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface StartGameScreenProps {}

const StartGameScreen: React.FC<StartGameScreenProps> = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Some Text</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default StartGameScreen;
