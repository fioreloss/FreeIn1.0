import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import foto1 from '../../Assets/attitude/1.png';
import foto2 from '../../Assets/attitude/2.png';
import foto3 from '../../Assets/attitude/3.png';
import foto4 from '../../Assets/attitude/4.png';
import foto5 from '../../Assets/attitude/5.png';
import foto6 from '../../Assets/attitude/6.png';
import PersonalityComponent from './PersonalityComponent';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

export default function PersonalAttitude({navigation}) {
  return (
    <ScrollView>
      <Text style={styles.text}>My personal attitude</Text>
      <View style={styles.container}>
        <PersonalityComponent image={foto1} percent={40} color="#FA5C00" />
        <PersonalityComponent image={foto2} percent={20} color="#CF086F" />
        <PersonalityComponent image={foto3} percent={50} color="#1827AD" />
        <PersonalityComponent image={foto4} percent={70} color="orange" />
        <PersonalityComponent image={foto5} percent={30} color="#0FA2BF" />
        <PersonalityComponent image={foto6} percent={30} color="#850F59" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    margin: 10,
    color: '#fa5c00',
    fontFamily: 'Tahoma',
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: '700',
  },
});
