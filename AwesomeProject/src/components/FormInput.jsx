import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";


export const FormInput = ({ placeholder }) => {
  const [text, setText] = useState('');
  

  return <TextInput placeholder={placeholder} style={styles.form} onChangeText={setText} value={text} />

};

const styles = StyleSheet.create({
  form: {

    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 16,
    marginBottom: 12,
  },


});