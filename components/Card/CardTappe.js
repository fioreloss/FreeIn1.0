import {red} from 'chalk';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Badge, Icon} from 'react-native-elements';
import {bookmarked, rate} from '../../store/actions/Post';
//Card Dimensions
const {width} = Dimensions.get('screen');
const cardWidth = width / 1.1;
const {height} = Dimensions.get('screen');
const cardHeight = height / 1.6;
export default function CardTappe(props) {
  const [click, setClick] = useState(false);
  const [bNumber, setBNumber] = useState(props.bookmarks);
  const [bColor, setBColor] = useState(props.Bookcolor);
  const [bBackgroundColor, setBBackgroundColor] = useState(
    props.BookBackgroundcolor,
  );

  const [rColor, setRColor] = useState(props.RateColor);
  const [rBackgroundColor, setRBackgroundColor] = useState(
    props.RateBackgroundColor,
  );
  const [rNumber, setRNumber] = useState(props.likes);

  const rated = (id, ratedColor, ratedNumber) => {
    rate(id);
    if (ratedColor === 'whitesmoke') {
      setRColor('#21cf4f');
      setRBackgroundColor('#fff');
      setRNumber(ratedNumber + 1);
    } else if (ratedColor === '#21cf4f') {
      setRColor('whitesmoke');
      setRBackgroundColor('transparent');
      setRNumber(ratedNumber - 1);
    }
  };

  const onPressItem = (id, bookmarkcolor, markNumber) => {
    bookmarked(id);
    if (bookmarkcolor === 'whitesmoke') {
      setBColor('#21cf4f');
      setBBackgroundColor('#fff');
      setBNumber(markNumber + 1);
    } else if (bookmarkcolor === '#21cf4f') {
      setBColor('whitesmoke');
      setBBackgroundColor('transparent');
      setBNumber(markNumber - 1);
    }
    console.log('ngjyrapas clik', bColor);
  };

  const {
    image,
    title,
    desc,
    bookmarks,
    likes,
    Bookcolor,
    BookBackgroundcolor,
    idR,
    idB,
    RateColor,
    RateBackgroundColor,
  } = props;

  return (
    <View style={styles.card}>
      <View style={styles.flag}>
        <TouchableOpacity>
          <Icon
            type="feather"
            admin
            name="flag"
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
      <Image style={styles.cardImage} source={{uri: image}} />
      <View style={styles.cardDetails}>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>

          <View style={styles.buttonContainer}>
            <View style={styles.buttonLeft}>
              <TouchableOpacity>
                <Text style={styles.textGo}>GO</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRight}>
              {/* <TouchableOpacity>
                <Icon
                  type="feather"
                  name="star"
                  size={30}
                  color={'#fff'}
                  style={styles.buttons}
                />
                <Badge
                  value={likes}
                  status="warning"
                  containerStyle={styles.badgeStyle}
                />
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => rated(idR, rColor, rNumber, rBackgroundColor)}>
                <Icon
                  style={styles.buttons}
                  type="SimpleLineIcons"
                  name="star"
                  size={36}
                  borderColor={click ? '#21cf4f' : 'whitesmoke'}
                  // color={color}
                  color={rColor}
                  backgroundColor={rBackgroundColor}
                />
                <Badge
                  value={rNumber}
                  status="warning"
                  containerStyle={styles.badgeStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  onPressItem(idB, bColor, bNumber, bBackgroundColor)
                }>
                <Icon
                  type="Ionicons"
                  name="bookmark"
                  size={32}
                  style={styles.buttons}
                  borderColor={'whitesmoke'}
                  color={bColor}
                  backgroundColor={bBackgroundColor}
                />
                <Badge
                  value={bNumber}
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
    height: cardHeight,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 15,
  },
  cardImage: {
    height: '70%',
    width: cardWidth,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
    width: 60,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#169CD8',
  },
  cardDetails: {
    height: '30%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#169CD8',
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
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: '#000',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRight: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textGo: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#169CD8',
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
    color: '#fff',
  },
  badgeStyle: { 
    position: 'absolute',
    top: -4,
    right: 10,
  },
});
