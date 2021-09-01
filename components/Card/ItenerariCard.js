import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Badge, Icon} from 'react-native-elements';

//Media

//Card Dimensions
const {width} = Dimensions.get('screen');
const cardWidth = width / 1.1;

export default function CardTappe(props) {
  const {image, title, desc, likes, bookmarks} = props;
  return (
    <View style={styles.card}>
      <View style={styles.flag}>
        <TouchableOpacity>
          <Icon
            name="map"
            type="feather"
            size={35}
            style={styles.inputIcon}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.avatar}>
        <TouchableOpacity>
          <Icon type="feather" name="user" size={30} style={styles.inputIcon} />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonLeft}>
              <TouchableOpacity>
                <Text style={styles.textInsideButton}>Intenerari</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRight}>
              <TouchableOpacity>
                <Icon
                  style={styles.buttons}
                  type="feather"
                  name="star"
                  size={30}
                  color={'#fff'}
                />
                <Badge
                  value={likes}
                  status="warning"
                  containerStyle={styles.badgeStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  type="feather"
                  name="bookmark"
                  size={30}
                  style={styles.buttons}
                  color={'#fff'}
                />
                <Badge
                  value={bookmarks}
                  status="warning"
                  containerStyle={styles.badgeStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 500,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    marginLeft: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cardImage: {
    height: 400,
    width: cardWidth,
  },
  avatar: {
    height: 50,
    width: 50,
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: 'white',
    opacity: 0.7,
  },
  flag: {
    height: 60,
    width: 80,
    position: 'absolute',
    zIndex: 1,
    left: 0,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA5B0C',
  },
  cardDetails: {
    height: 150,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#EA5B0C',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    top: 100,
  },
  buttonLeft: {
    position: 'absolute',
    left: 0,
    marginLeft: 10,
    width: 150,
    height: 60,
    borderRadius: 100,
    borderColor: '#000',
    backgroundColor: 'white',
  },
  buttonRight: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    marginRight: 15,
  },
  textInsideButton: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 140,
    height: 60,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
    padding: 17,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EA5B0C',
    fontStyle: 'italic',
  },
  buttons: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
    marginRight: 10,
  },
  cardTitle: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  badgeStyle: {
    position: 'absolute',
    top: -4,
    right: 10,
  },
});
