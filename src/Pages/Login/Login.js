import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Btn from '../../Components/common/Button';
import {COLORS} from '../../assets/Constants/Colors';
import Background from '../../Backgroud';
import AuthLogo from '../../assets/Svg/AuthLogo';
import InputField from '../../Components/common/InputField';

const Home = ({navigation}) => {
  return (
    <Background>
      <View style={{alignItems: 'center'}}>
        <View>
          <AuthLogo />
        </View>
        <View>
          <Text>Sign in to your Account</Text>
        </View>
        <InputField type="email" placeholder={'Email'} />
        <InputField type="password" placeholder={'Password'} />
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({});
