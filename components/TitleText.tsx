import React from "react";
import { Text } from "react-native";
import DefaultStyles from "../constants/default-styles";

interface TitleTextProps {
  customStyles?: {};
  [x: string]: any;
}
const TitleText: React.FC<TitleTextProps> = (props) => {
  return (
    <Text
      style={{ ...props.customStyles, ...DefaultStyles.title }}
      {...props}
    />
  );
};

export default TitleText;
