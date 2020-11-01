import React from "react";
import { View, StyleSheet } from "react-native";

interface CardProps {
  customStyles: {};
}

const Card: React.FC<CardProps> = ({ children, customStyles }) => {
  return <View style={{ ...styles.card, ...customStyles }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    // For IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.16,
    // For Android
    elevation: 5,
  },
});

export default Card;
