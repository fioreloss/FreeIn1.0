import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SegmentedControl from 'rn-segmented-control';

import AddTappa from './AddTappa';
import AddItenerario from './AddItenerario';
import AddShop from './AddShop';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
export default function Editor({navigation}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [color, setColor] = useState('#2D2E82');
  const handleTabsChange = (index, color) => {
    setTabIndex(index);
  };

  return (
    <LinearGradient
      colors={['#F3D7B8', '#AD5F56', '#D08972', '#C57862', '#DFA37D']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0.4, 1, 0, 0.98, 0.78]}
      style={styles.container}>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <SegmentedControl
          tabs={['Tappa', 'Itenerario', 'Shop']}
          currentIndex={tabIndex}
          onChange={handleTabsChange}
          segmentedControlBackgroundColor="white"
          activeSegmentBackgroundColor={
            tabIndex === 0 ? '#ff4000' : tabIndex === 1 ? '#169CD8' : 'green'
          }
          activeTextColor="white"
          textColor="black"
          activeTextWeight="700"
          paddingVertical={6}
          width={WIDTH - 20}
          containerStyle={{
            borderWidth: 1,
            borderColor: 'white',
          }}
          textStyle={{
            fontWeight: '300',
          }}
        />
      </View>
      {tabIndex === 0 ? (
        <AddTappa />
      ) : tabIndex === 1 ? (
        <AddItenerario />
      ) : (
        <AddShop />
      )}
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -5,
  },
});
