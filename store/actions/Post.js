import AsyncStorage from '@react-native-async-storage/async-storage';
export const bookmarked = async id => {
  const token = await AsyncStorage.getItem('userToken');
  fetch('https://freeindemo.euronet.aero/api/client/BookmarkToogle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ApiSecretKey: 'x114a109114w119q99v104',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({
      stopId: id,
    }),
  })
    .then(response => response.json())
    .then(json => {
      console.log('json', json);
    });
};

export const rate = async id => {
  const token = await AsyncStorage.getItem('userToken');
  fetch('https://freeindemo.euronet.aero/api/client/RateToogle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ApiSecretKey: 'x114a109114w119q99v104',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({
      stopId: id,
    }),
  })
    .then(response => response.json())
    .then(json => {
      console.log('json', json);
    });
};

export const singlePost = async id => {
  const token = await AsyncStorage.getItem('userToken');
  fetch('https://freeindemo.euronet.aero/api/client/GetStop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ApiSecretKey: 'x114a109114w119q99v104',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({
      id: id,
    }),
  }).then(response => response.json());
};
