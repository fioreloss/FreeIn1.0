import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon, Thumbnail, Com, Button} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IGStoryCircle from 'react-native-instagram-story-circle';

export default function Members({style}) {
  return (
    <View style={style}>
      <View
        style={{
          backgroundColor: 'whitesmoke',
          justifyContent: 'center',
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              padding: 5,
              marginBottom: 15,
              justifyContent: 'center',
              marginLeft: 20,
              marginRight: 20,
            }}>
            <FontAwesome name="heartbeat" size={38} color={'#ff0000'} />
          </View>
          <IGStoryCircle
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png',
            }}
            hasStory
            innerBorderColor={'#fff'}
            storyRingColor={['#ff4000', '#ff4000']}
            defaultRingColor={['#ff4000', '#ff4000']}
            onPress={() => {}}
          />
          <IGStoryCircle
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png',
            }}
            hasStory
            innerBorderColor={'#fff'}
            storyRingColor={['#ff4000', '#ff4000']}
            defaultRingColor={['#ff4000', '#ff4000']}
            onPress={() => {}}
          />
          <IGStoryCircle
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png',
            }}
            hasStory
            innerBorderColor={'#fff'}
            storyRingColor={['#ff4000', '#ff4000']}
            defaultRingColor={['#ff4000', '#ff4000']}
            onPress={() => {}}
          />
          <IGStoryCircle
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png',
            }}
            hasStory
            innerBorderColor={'#fff'}
            storyRingColor={['#ff4000', '#ff4000']}
            defaultRingColor={['#ff4000', '#ff4000']}
            onPress={() => {}}
          />
          <IGStoryCircle
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png',
            }}
            hasStory
            innerBorderColor={'#fff'}
            storyRingColor={['#ff4000', '#ff4000']}
            defaultRingColor={['#ff4000', '#ff4000']}
            onPress={() => {}}
          />
          <IGStoryCircle
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png',
            }}
            hasStory
            innerBorderColor={'#fff'}
            storyRingColor={['#ff4000', '#ff4000']}
            defaultRingColor={['#ff4000', '#ff4000']}
            onPress={() => {}}
          />
          <IGStoryCircle
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png',
            }}
            hasStory
            innerBorderColor={'#fff'}
            storyRingColor={['#ff4000', '#ff4000']}
            defaultRingColor={['#ff4000', '#ff4000']}
            onPress={() => {}}
          />
          <IGStoryCircle
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png',
            }}
            hasStory
            innerBorderColor={'#fff'}
            storyRingColor={['#ff4000', '#ff4000']}
            defaultRingColor={['#ff4000', '#ff4000']}
            onPress={() => {}}
          />
          <IGStoryCircle
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png',
            }}
            hasStory
            innerBorderColor={'#fff'}
            storyRingColor={['#ff4000', '#ff4000']}
            defaultRingColor={['#ff4000', '#ff4000']}
            onPress={() => {}}
          />
          {/* <Thumbnail
            style={{marginHorizontal: 4}}
            source={{uri: "https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png"}}
          />
          <Thumbnail
            style={{marginHorizontal: 4}}
            source={require('../../Assets/map.jpg')}
          />
          <Thumbnail
            style={{marginHorizontal: 4}}
            source={{uri: "https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png"}}
          />
          <Thumbnail
            style={{marginHorizontal: 4}}
            source={{uri: "https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png"}}
          />
          <Thumbnail
            style={{marginHorizontal: 4}}
            source={{uri: "https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png"}}
          />
          <Thumbnail
            style={{marginHorizontal: 4}}
            source={{uri: "https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png"}}
          />
          <Thumbnail
            style={{marginHorizontal: 4}}
            source={{uri: "https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896551/FreeIn/member500_bsk40k.png"}}
          /> */}

          {/* <Thumbnail
            style={{marginHorizontal: 5, borderColor: 'orange', borderWidth: 2}}
            source={require('../../Assets/Logo/avatar.png')}
          /> */}

          {/* <Thumbnail source={require('../../Assets/members.png')} /> */}
        </ScrollView>
      </View>
    </View>
  );
}
