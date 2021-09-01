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

export default function ShopCard(props) {
  const {price, title, desc, likes, bookmarks, image} = props;
  return (
    <View style={styles.card}>
      <View style={styles.flag}>
        <TouchableOpacity>
          <Icon
            name="shopping-cart"
            type="feather"
            size={35}
            style={styles.inputIcon}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <View>
          <View style={styles.detailView}>
            <Text style={styles.detailPrice}>{price}</Text>
            <Text style={styles.detailText}>{title}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonLeft}>
              <TouchableOpacity>
                <Text style={styles.textGo}>Aggiungi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRight}>
              <TouchableOpacity>
                <Icon
                  name="star"
                  type="feather"
                  size={30}
                  color={'#fff'}
                  style={styles.buttons}
                />
                <Badge
                  value={likes}
                  status="warning"
                  containerStyle={styles.badgeStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="bookmark"
                  type="feather"
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
    borderRadius: 15,
  },
  cardImage: {
    height: 400,
    width: cardWidth,
    borderTopRightRadius: 15,
  },
  flag: {
    height: 60,
    width: 60,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5A31D',
  },
  cardDetails: {
    height: 150,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#F5A31D',
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
    width: 140,
    height: 60,
    borderRadius: 20,
    borderColor: '#000',
    backgroundColor: 'white',
  },
  buttonRight: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    marginRight: 15,
  },
  textGo: {
    alignSelf: 'center',
    borderRadius: 100,
    padding: 17,
    fontSize: 18,
    fontWeight: '700',
    color: '#F5A31D',
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
  detailView: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  detailPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
});
