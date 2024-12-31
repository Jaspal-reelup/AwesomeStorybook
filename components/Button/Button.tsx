import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export interface MyButtonProps {
  onPress: () => void;
  text: string;
  customStyle?:object;

}

export const MyButton = ({ onPress, text ,customStyle}: MyButtonProps) => {
  return (
    <>
    <TouchableOpacity style={[styles.container,customStyle]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "purple",
    alignSelf: "flex-start",
    borderRadius: 8,
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
});
