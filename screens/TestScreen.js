import {
  Alert,
  StatusBar,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {RadioButton, Text} from 'react-native-paper';
import Onboarding from 'react-native-onboarding-swiper';
import RadioButtons from '../components/radioButton';

const TestScreen = () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  return (
    <Onboarding
      onSkip={() => Alert.alert('Skipped')}
      pages={[
        {
          title: '',
          subtitle: 'Scopri che viaggiatore sei in pochi passi',
          backgroundColor: '#f05c24',

          image: (
            <Image
              source={require('../Assets/imgtest.png')}
              style={{width: '100%', height: 120, alignSelf: 'flex-start'}}
            />
          ),
        },
        {
          title:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
          subtitle: <RadioButtons SetValue={setValue} Value={value} />,
          backgroundColor: '#f05c24',
          image: (
            <Image
              source={require('../Assets/imgtest.png')}
              style={{width: '100%', height: 120, alignSelf: 'flex-start'}}
            />
          ),
        },
        {
          title: 'Lorem Ipsum',
          subtitle: <RadioButtons SetValue={setValue1} Value={value1} />,
          backgroundColor: '#f05c24',
          image: (
            <Image
              source={require('../Assets/imgtest.png')}
              style={{width: '100%', height: 120, alignSelf: 'flex-start'}}
            />
          ),
        },
      ]}
    />
  );
};

export default TestScreen;
