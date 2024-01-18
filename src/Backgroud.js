import {ImageBackground, Text, View} from 'react-native';
import React from 'react';

const Background = ({children, style}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('./assets/Background.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
        resizeMode="cover">
        <View style={{...style}}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default Background;
