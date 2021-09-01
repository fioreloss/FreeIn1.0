import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/EvilIcons';
import ProfileTab from '../../components/profileTab/ProfileTab';
import {useNavigation} from '@react-navigation/native';
import Members from '../../Shared/Members';
import LinearGradient from 'react-native-linear-gradient';

export default function Edit() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#CC8769', '#FCF4E6', '#B66961']}
      start={{x: 0.5, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.BigView}>
      <SafeAreaView>
        <ScrollView>
          <View style={{flexDirection: 'column'}}>
            <View style={styles.topContainer}>
              <Avatar.Icon
                size={120}
                icon="account"
                borderColor="brown"
                color="#d95c44"
                backgroundColor="white"
              />
              <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                  <Icons name="user" size={25} color="grey" />
                  <Text style={styles.nameText}> Paolo Rossi</Text>
                </View>
                <View style={styles.textContainer}>
                  <Icons name="mail" size={25} color="grey" />
                  <Text style={styles.textSite}> paolorossi@site.com</Text>
                </View>
                <View style={styles.textContainer}>
                  <Icons name="globe" size={25} color="grey" />
                  <Text style={styles.textSite}>www.paolorossi.com</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <Icon.Button
                    name="image"
                    size={25}
                    backgroundColor="transparent"
                    borderRadius={20}
                    style={styles.button}>
                    Change Photo
                  </Icon.Button>
                  <Icon.Button
                    name="pencil"
                    size={20}
                    backgroundColor="transparent"
                    borderRadius={20}
                    style={styles.button1}>
                    edit
                  </Icon.Button>
                </View>
              </View>
            </View>
            <View style={{height: 5, backgroundColor: 'salmon'}}></View>
            <View style={styles.bottomContainer}>
              <ProfileTab
                title="Tappe"
                name="flag"
                style={styles.ProfileTab}
                drejtimi="Tappe"
              />
              {/* <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}> */}
              <ProfileTab
                title="Intinerari"
                name="flag"
                style={styles.ProfileTab}
                drejtimi="TappeItenerari"
              />
              {/* </TouchableOpacity> */}
              {/* <ProfileTab title="" name="flag" style={styles.ProfileTab} /> */}
              <Members
                style={{
                  height: 80,
                  alignItems: 'center',
                  backgroundColor: 'whitesmoke',
                  width: '86%',
                  alignSelf: 'center',
                  padding: 0,
                  backgroundColor: 'red',
                }}
              />
              <ProfileTab
                title="Shop territoriale"
                name="flag"
                style={styles.ProfileTab}
                drejtimi="Shop"
              />
              <ProfileTab
                title="Inners"
                name="flag"
                style={styles.ProfileTab}
              />
              <ProfileTab
                title="Cashback"
                name="flag"
                style={styles.ProfileTab}
              />
            </View>
            <View
              style={{
                height: 5,
                backgroundColor: 'blue',
                marginTop: '6.6%',
              }}></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  BigView: {
    height: '100%',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '30%',
    paddingBottom: '11%',
  },
  ProfileTab: {backgroundColor: 'white'},

  infoContainer: {
    alignItems: 'flex-start',
    marginTop: '10%',
    justifyContent: 'space-between',
    marginLeft: '10%',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '3%',
  },
  nameText: {color: 'blue', fontWeight: 'bold', fontSize: 20},
  textSite: {
    color: 'blue',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  button: {
    width: 140,
    paddingTop: -5,
    paddingBottom: 2,
    borderColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 7,
    marginRight: 5,
  },
  button1: {
    width: 70,
    paddingTop: -5,
    paddingBottom: 2,
    borderColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
  },
  bottomContainer: {
    marginTop: 10,
    height: '63%',
    justifyContent: 'space-between',
  },
  Members: {
    backgroundColor: 'white',
  },
});
