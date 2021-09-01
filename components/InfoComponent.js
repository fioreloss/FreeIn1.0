import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const InfoComponent = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size={'medium'}
        source={{
          uri: props.imageUrl,
        }}
        containerStyle={styles.iconStyle}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.email}>{props.email}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="user"
          type="feather"
          color="#517fa4"
          size={20}
          onPress={() => navigation.navigate('MyRoomScreen')}
        />
        <Icon name="home" type="feather" color="#517fa4" size={20} />
        <Icon
          name="piggy-bank"
          type="font-awesome-5"
          color="#517fa4"
          size={20}
        />
        <Icon name="bell" type="feather" color="#517fa4" size={20} />
      </View>
    </View>
  );
};

export default InfoComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  iconContainer: {
    flexDirection: 'row',

    width: '30%',
    position: 'absolute',
    right: 10,
    bottom: 5,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  iconStyle: {
    marginHorizontal: '5%',
  },
  info: {},
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 13,
  },
  email: {
    fontSize: 14,
  },
});
