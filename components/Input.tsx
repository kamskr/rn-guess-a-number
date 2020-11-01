import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface InputProps {
  customStyles?: {};
  [x: string]: any;
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <TextInput style={{ ...styles.input, ...props.customStyles }} {...props} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
