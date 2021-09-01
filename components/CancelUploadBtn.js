import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const CancelUploadBtn = props => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>
      <TouchableOpacity
        onPress={() => navigation.replace(props.cancelAction)}
        style={{paddingTop: 10, flexDirection: 'row', paddingRight: '10%'}}>
        <MaterialIcons name="cancel" color="#F40000" size={36} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(props.uploadAction)}
        style={{paddingTop: 10, flexDirection: 'row', paddingLeft: '10%'}}>
        <Entypo name="upload" color="#00e600" size={36} />
      </TouchableOpacity>
    </View>
  );
};

export default CancelUploadBtn;

const styles = StyleSheet.create({});
