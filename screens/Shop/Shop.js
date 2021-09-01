import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

//icons
import Icon from 'react-native-vector-icons/Feather';

//Card Dimensions
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('window');
//media
import jars from '../../Assets/jars.jpg';
import CardList from '../../components/Card/CardList';
const Shop = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.detailSection}>
          <View style={styles.imageSection}>
            <View style={styles.zoomView}>
              <TouchableOpacity>
                <Icon name={'zoom-in'} size={28} />
              </TouchableOpacity>
            </View>
            <Image style={styles.image} source={jars} />
          </View>
          <View style={styles.textSection}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                alignSelf: 'flex-start',
              }}>
              Pomodori sott'olio
            </Text>
            <View style={styles.priceGroup}>
              <View>
                <Icon name={'star'} size={16} />
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>$10.00</Text>
            </View>
            <Text style={styles.textDetail}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <View style={styles.selectionGroup}>
              <View>
                <Text style={styles.selectionTitle}>Seleziona qualita</Text>
              </View>
              <View style={styles.selectionBtnGroup}>
                <TouchableOpacity>
                  <Text style={styles.selectionText}>dolce</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.selectionText}>picante</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.selectionGroup}>
              <View>
                <Text style={styles.selectionTitle}>Seleziona peso </Text>
              </View>
              <View style={styles.selectionBtnGroup}>
                <TouchableOpacity>
                  <Text style={styles.selectionText}>gr300</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.selectionText}>gr500</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.btnGroup}>
              <View style={styles.qtyBtn}>
                <TouchableOpacity>
                  <Text style={styles.textBtn}>-</Text>
                </TouchableOpacity>
                <Text style={styles.textBtn}>1</Text>
                <TouchableOpacity>
                  <Text style={styles.textBtn}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cartBtn}>
                <TouchableOpacity>
                  <Text style={styles.textBtn}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <Text
          style={{
            fontSize: 18,
            marginVertical: 10,
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: 'grey',
          }}>
          Ti potrebbe anche interessare
        </Text>
        <View style={styles.carousel}>
          <CardList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 10,
    width: width,
    height: height,
  },
  detailSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
    marginBottom: 100,
  },
  imageSection: {
    flex: 1,
    borderRadius: 25,
  },

  image: {
    borderRadius: 25,
    width: 180,
    height: 210,
  },
  zoomView: {
    height: 50,
    width: 60,
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 0,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: 'white',
  },
  textSection: {
    flex: 1,
    flexDirection: 'column',
  },
  priceGroup: {
    marginVertical: 10,
    alignItems: 'flex-end',
  },
  textDetail: {
    fontSize: 10,
    textAlign: 'justify',
  },
  selectionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  selectionText: {
    fontSize: 11,
    color: '#000',
    fontStyle: 'italic',
  },
  selectionBtnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'flex-end',
  },
  selectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  btnGroup: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  qtyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 60,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'grey',
    marginRight: 10,
  },
  cartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 80,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#EA5B23',
    padding: 5,
  },
  textBtn: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
  },
  carousel: {
    marginBottom: 120,
    alignItems: 'center',
    paddingBottom: 10,
  },
});
