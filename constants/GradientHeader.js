import React from 'react';
import {View, StatusBar} from 'react-native';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const GradientHeader = () => (
  <View>
    <Header
      style={{backgroundColor: 'transparent'}}
      height={80}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#020024', '#090979', '#ff8400'],
        start: {x: 0, y: 0},
        end: {x: 1, y: 1.0},
        locations: [0, 0.1, 0.9],
      }}
    />
    <StatusBar translucent={true} backgroundColor={'transparent'} />
  </View>
);

export default GradientHeader;
