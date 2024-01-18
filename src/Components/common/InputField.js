import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../assets/Constants/Colors';
import Icon from 'react-native-vector-icons/Entypo';

const InputField = ({type, placeholder}) => {
  const isPassword = type === 'password';
  console.log(type, placeholder);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightGray}
        secureTextEntry={isPassword}
      />
      <Icon name={'eye'} size={24} color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '90%',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 10,
  },
});

export default InputField;
