import React from "react";
import { Text, StyleSheet } from "react-native";
import DefaultStyles from "../constants/default-styles";

interface BodyTextProps {
  customStyles?: {};
  [x: string]: any;
}

const BodyText: React.FC<BodyTextProps> = (props) => {
  return (
    <Text
      style={(DefaultStyles.bodyText, { ...props.customStyles })}
      {...props}
    />
  );
};

export default BodyText;
