import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import CardTappe from '../../../components/Card/CardTappe';
import LinearGradient from 'react-native-linear-gradient';



const Search = () => {
  const [filterData, setfilterData] = useState([])
  const [masterData, setmasterData] = useState([])
  const [search, setsearch] = useState('')

  useEffect(() => {
    fetchPosts()
    return () => {
      
    }
  }, [])


  const fetchPosts = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts'
    // const apiURL = ('https://freeindemo.euronet.aero/api/client/ListStop', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     ApiSecretKey: 'x114a109114w119q99v104',
    //   },
    // })

    fetch(apiURL)
    .then((response) => response.json())
    .then((responseJson) => {
      setfilterData(responseJson)
      setmasterData(responseJson)
    }).catch((error) => {
      console.error(error)
    })
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData)
      setsearch(text)
    } else {
      setfilterData(masterData)
      setsearch(text)
    }
  }

  const ItemView = ({item}) => {
    return (
      <Text style={styles.itemStyle}>
        {item.id}{'. '}{item.title.toUpperCase()}
      </Text>
      // <CardTappe
      //     likes={item.Rating}
      //     bookmarks={item.Bookmarks}
      //     // image={item.Pictures[0].url}
          
      //     title={item.Name}
      //   /> 
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}} />
    )
  }


  return (
    <SafeAreaView style={{ flex: 1}} >
      <View style={styles.container}>
      <LinearGradient
        colors= {['#020024', '#090979', '#ff8400']}
        start= {{x: 0, y: 0}}
        end= {{x: 1, y: 1.0}}
        locations= {[0, 0.1, 0.9]}
        style={styles.gradient}
        >
          <TextInput
          style={styles.textInputStyle}
          value={search}
          clearButtonMode="always"
          placeholder="Search Here"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
          />
        </LinearGradient>
        
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>

  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  itemStyle: {
    padding: 15
  },
  textInputStyle: {
    height: 50,
    // borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  gradient: {
    borderRadius:30
  },
})

