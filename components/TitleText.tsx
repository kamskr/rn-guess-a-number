import React from "react";
import { Text } from "react-native";
import DefaultStyles from "../constants/default-styles";

interface TitleTextProps {
  [x: string]: any;
}
const TitleText: React.FC<TitleTextProps> = (props) => {
  return <Text style={DefaultStyles.title} {...props} />;
};

export default TitleText;
