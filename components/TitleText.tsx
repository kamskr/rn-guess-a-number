import React from "react";
import { Text, StyleSheet } from "react-native";
import DefaultStyles from "../constants/default-styles";

interface TitleTextProps {
  customStyles?: {};
  [x: string]: any;
}
const TitleText: React.FC<TitleTextProps> = (props) => {
  return (
    <Text style={(DefaultStyles.title, { ...props.customStyles })} {...props} />
  );
};

export default TitleText;
