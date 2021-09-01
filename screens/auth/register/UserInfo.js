import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import background from '../../Assets/background1.png';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
export default function UserInfo({navigation}) {
  const [checked, setchecked] = useState();
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#c94d22', '#e6845e']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}>
        <View style={{flex: 1}}>
          <View style={styles.logo}>
            <Image
              style={styles.logo1}
              source={{
                uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896664/FreeIn/logo-2048_oykatl.png',
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>
              My <Text style={styles.text}>Account</Text>{' '}
            </Text>
            <Text style={styles.text2}>User Info</Text>
            <Text style={styles.underLine}> </Text>
            <Text style={styles.text3}>Your Personal Details</Text>
          </View>
          <View style={styles.gender}>
            <RadioButton
              value="first"
              color="#CCCCCC"
              uncheckedColor="#CCCCCC"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setchecked('first')}
            />
            <Text style={styles.genderText}>male</Text>
            <RadioButton
              value="second"
              color="#CCCCCC"
              uncheckedColor="#CCCCCC"
              status={checked === 'second' ? 'checked' : 'unchcked'}
              onPress={() => setchecked('second')}
            />
            <Text style={styles.genderText}>female</Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon name="user" size={32} color="#CCCCCC" />
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#CCCCCC"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="users" size={32} color="#CCCCCC" />
            <TextInput placeholder="Last Name" placeholderTextColor="#CCCCCC" />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="mail" size={32} color="#CCCCCC" />
            <TextInput placeholder="Email" placeholderTextColor="#CCCCCC" />
          </View>
          <Button
            containerStyle={{width: 60, alignSelf: 'center', marginTop: 10}}
            buttonStyle={{
              borderRadius: 50,
              backgroundColor: '#fa5c00',
              height: 60,
              marginBottom: 53,
            }}
            icon={<Icon name="arrow-right" size={30} color="white" />}
            title=""
            onPress={() => navigation.navigate('DescInfo')}
          />
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  logo1: {
    width: 160,
    height: 160,
  },
  textContainer: {
    alignItems: 'center',
  },
  gender: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    width: '80%',
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#CCCCCC',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    height: 50,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    marginTop: 10,
    borderColor: '#CCCCCC',
  },
  underLine: {
    textDecorationLine: 'underline',
    paddingBottom: 10,
    color: '#CCCCCC',
  },
  text1: {
    fontSize: 40,
    color: '#CCCCCC',
  },
  text: {
    fontWeight: 'bold',
    color: '#CCCCCC',
  },
  text2: {
    fontSize: 30,
    color: '#CCCCCC',
  },
  text3: {
    fontSize: 20,
    paddingBottom: 25,
    color: '#CCCCCC',
  },
  genderText: {
    color: '#CCCCCC',
  },
});
