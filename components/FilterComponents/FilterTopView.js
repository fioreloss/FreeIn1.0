import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icons from './Icons';

const FilterTopView = () => {
  return (
    <View style={styles.FirstView}>
      <View style={styles.viewSalvati}>
        <Icons
          nameScreen={'Salvati'}
          iconName={'bookmarks-outline'}
          navigimi={'Salvati'}
        />
      </View>
      <View style={styles.viewPost}>
        <Icons
          nameScreen={'My Post'}
          iconName={'star-outline'}
          navigimi={'MyPost'}
        />
      </View>
      <View style={styles.viewAmici}>
        <Icons
          nameScreen={'Amici'}
          iconName={'people-sharp'}
          navigimi={'Amici'}
        />
      </View>
    </View>
  );
};

export default FilterTopView;

const styles = StyleSheet.create({
  FirstView: {
    flexDirection: 'row',
  },
  ikona: {padding: 15, backgroundColor: 'grey'},

  viewSalvati: {marginRight: 30},
  viewPost: {},
  viewAmici: {marginLeft: 30},
});
