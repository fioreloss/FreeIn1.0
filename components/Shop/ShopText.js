import {Center} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-elements';
import Selection from './Selection';
const ShopText = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.scndContainer}>
        <Rating fractions="1" tintColor="grey" imageSize={16} />
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>${props.price}</Text>
      </View>
      <Text style={styles.desc}>{props.desc}</Text>
      <Selection selection="qualita" selection1="dolce" selection2="picante" />
      <Selection selection="peso" selection1="gr300" selection2="gr500" />
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
  );
};

export default ShopText;

const styles = StyleSheet.create({
  container: {
    marginLeft: '3%',
    width: '45%',

    // backgroundColor: 'grey',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  scndContainer: {
    marginTop: '10%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  desc: {
    marginTop: '10%',
    fontSize: 12,
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
    width: 80,
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
});
