import React from 'react';
import {Button} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import LinearGradient from 'react-native-linear-gradient';

import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {white} from 'chalk';

export default function YourProfile({navigation}) {
  return (
    <KeyboardAwareScrollView>
      <LinearGradient
        colors={['#c94d22', '#e6845e']}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.ViewKryesore}>
          <View style={styles.ViewPare}>
            <Text style={styles.FirstText}>Il Tuo profile è</Text>
          </View>
          <View style={styles.ViewImg}>
            <Image
              style={styles.ImgAkrep}
              source={{
                uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896613/FreeIn/akrep_jkemwa.png',
              }}
            />
          </View>
          <View style={styles.ViewDyte}>
            <Text style={styles.SecondText}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </Text>
          </View>
          <Button
            containerStyle={{
              width: 60,
              alignSelf: 'center',
              marginTop: 30,
            }}
            buttonStyle={{
              borderRadius: 50,
              backgroundColor: '#fa5c00',
              height: 60,
              marginTop: 100,
            }}
            icon={<Feather name="arrow-right" size={30} color="white" />}
            title=""
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  ViewKryesore: {
    display: 'flex',
    // flex: 0.1,
    height: '100%',
    margin: 30,
    // backgroundColor: '#F4DECB',
  },
  ViewPare: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  FirstText: {
    fontSize: 19.1,
    fontFamily: 'montserrat',
    color: 'white',
  },
  SecondText: {
    fontFamily: 'montserrat',
    color: 'white',
  },
  ViewImg: {
    marginTop: -120,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ViewDyte: {
    marginTop: -130,
    flexDirection: 'row',
    color: 'white',
  },
});
