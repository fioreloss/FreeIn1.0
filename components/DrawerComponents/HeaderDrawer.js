import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

const HeaderDrawer = () => {
  return (
    <View style={styles.userInfoSection}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Avatar.Image
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
          size={50}
        />
        <View style={{marginLeft: 15, flexDirection: 'column'}}>
          <Title style={styles.title}>Paulo Rossi</Title>
          <Caption style={styles.caption}>@Rossi</Caption>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.section}>
          <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
          <Caption style={styles.caption}>Following</Caption>
        </View>
        <View style={styles.section}>
          <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
          <Caption style={styles.caption}>Followers</Caption>
        </View>
      </View>
    </View>
  );
};

export default HeaderDrawer;

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'darkmagenta',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'darkmagenta',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
});
