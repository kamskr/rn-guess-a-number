import React from "react";
import { Text, StyleSheet } from "react-native";
import DefaultStyles from "../constants/default-styles";

interface BodyTextProps {
  [x: string]: any;
}

const BodyText: React.FC<BodyTextProps> = (props) => {
  return (
    <Text
      style={{ ...props.customStyles, ...DefaultStyles.bodyText }}
      {...props}
    />
  );
};

export default BodyText;
