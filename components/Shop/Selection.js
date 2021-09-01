import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Selection = props => {
  return (
    <View style={styles.selectionGroup}>
      <View>
        <Text style={styles.selectionTitle}>Seleziona {props.selection}</Text>
      </View>
      <View style={styles.selectionBtnGroup}>
        <TouchableOpacity>
          <Text style={styles.selectionText}>{props.selection1}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.selectionText}>{props.selection2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Selection;

const styles = StyleSheet.create({
  selectionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
  selectionText: {
    fontSize: 11,
    color: '#000',
    fontStyle: 'italic',
  },
  selectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  selectionBtnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'flex-end',
  },
});
