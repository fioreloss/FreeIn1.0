import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
} from 'react-native';
import imageloading from '../../Assets/loadfreein11.gif';

import CardTappe from './CardTappe';

const {width} = Dimensions.get('screen');

const CardList = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(21);
  const [isListEnd, setListEnd] = useState(false);

  const dataJ = JSON.stringify(data);
  useEffect(() => getData(), []);

  const getData = async () => {
    console.log('pageNo', pageNo);
    const token = await AsyncStorage.getItem('userToken');
    if (!isLoading && !isListEnd) {
      console.log('getData');
      setLoading(true);
      fetch('https://freeindemo.euronet.aero/api/client/ListStop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ApiSecretKey: 'x114a109114w119q99v104',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          pagination: {
            page: pageNo,
            rowsPerPage: 10,
          },
        }),
      })
        .then(response => response.json())
        .then(json => {
          console.log('json', json);
          if (json.Data.Data.length > 0) {
            setPageNo(pageNo + 1);
            // const data1 = json.Data.Data.reverse();

            setData([...data, ...json.Data.Data]);

            setLoading(false);
          } else {
            setListEnd(true);
            setLoading(false);
          }
        })

        .catch(error => {
          console.error(error);
        });
    }

    console.log('test354544');
  };

  const renderFooter = () => {
    return (
      //Footer View with Loader
      <View style={styles.footer}>
        {isLoading ? (
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896539/FreeIn/loadfreein11_gdgsij.gif',
            }}
            alt="loading"
            style={{
              width: 180,
              height: 180,
            }}
          />
        ) : null}
      </View>
    );
  };

  // const onPressItem = id => {
  //   alert(id);
  // };

  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <FlatList
            horizontal={true}
            //inverted={true}
            data={data}
            keyExtractor={({Id}, index) => Id}
            initialNumToRender={5}
            renderItem={({item}) => (
              // <TouchableOpacity onPress={() => onPressItem(item.Id)}>
              <CardTappe
                likes={item.Rating}
                bookmarks={item.Bookmarks}
                image={
                  `` +
                  item.Pictures.map(n => {
                    return n.url + ``;
                  })
                }
                title={item.Name}
                RateColor={item.Rated === true ? '#21cf4f' : 'whitesmoke'}
                Bookcolor={item.Bookmarked === true ? '#21cf4f' : 'whitesmoke'}
                RateBackgroundColor={
                  item.Rated === true ? '#fff' : 'transparent'
                }
                BookBackgroundcolor={
                  item.Bookmarked === true ? '#fff' : 'transparent'
                }
                idR={item.Id}
                idB={item.Id}
              />
              // </TouchableOpacity>
            )}
            initialNumToRender={50}
            ListFooterComponent={renderFooter}
            onEndReached={getData}
            onEndReachedThreshold={0.00001} // So as I see it: if you do onEndReachedThreshold ={10} it calls onEndReached if you scrolled to 10 pixels from the bottom
          />
        </View>
      </View>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  footer: {
    // padding: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    // marginTop: '15%',
    paddingTop: '50%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
