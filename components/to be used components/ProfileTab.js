import {BackgroundColor, red} from 'chalk';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
// import {orange100} from 'react-native-paper/lib/typescript/styles/colors';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

export default function ProfileTab(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View style={styles.stripe}></View>
        <IconFontAwesome
          name={props.name}
          size={40}
          color="#EA5B0C"
          style={{paddingLeft: '5%'}}
        />
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <View style={styles.button}>
        <Button
          containerStyle={{width: 35}}
          buttonStyle={{
            borderRadius: 60,
            backgroundColor: '#fa5c00',
            height: 35,
          }}
          icon={<IconFeather name="arrow-right" size={20} color="white" />}
          title=""
          onPress={() => navigation.navigate(props.drejtimi)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '86%',
    marginHorizontal: '7%',
    paddingRight: '2%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    color: 'orange',
    justifyContent: 'space-between',
  },
  leftSide: {
    width: '60%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  stripe: {
    height: 50,
    width: 5,
    backgroundColor: 'orange',
  },

  text: {
    fontSize: 20,
    paddingLeft: '8%',
  },
  button: {
    alignSelf: 'center',
  },
});
