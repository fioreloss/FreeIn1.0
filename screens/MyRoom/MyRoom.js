import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Followers from '../../components/RoomComponents/Followers';
import Members from '../../components/Shared/Members';
import PersonalAttitude from '../../components/Shared/PersonalAttitude';
import InfoComponent from '../../components/InfoComponent';
import Posts from '../../store/actions/Post';
const MyRoom = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <Members />
        <Followers seguiti={23} follower={127} />
        <InfoComponent
          imageUrl={'https://i.redd.it/v0caqchbtn741.jpg'}
          name="Paulo Rosi"
          email="paulorosi@gmail.com"
        />
        <PersonalAttitude />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyRoom;
