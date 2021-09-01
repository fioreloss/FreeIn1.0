import React from 'react';
import {StyleSheet, View, ActivityIndicator, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './nav/RootStackScreen';
import authReducer from './store/reducers/auth';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import AppContainer from './AppContainer';
import RadioButtons from './components/radioButton';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
