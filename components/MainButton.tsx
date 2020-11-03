import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../constants/theme";
interface MainButtonProps {
  customStylesButton?: {};
  customStylesButtonText?: {};
  onPress: () => void;
  [x: string]: any;
}

const MainButton: React.FC<MainButtonProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
    >
      <View style={{ ...styles.button, ...props.customStylesButton }}>
        <Text style={{ ...styles.buttonText, ...props.customStylesButtonText }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});

export default MainButton;
