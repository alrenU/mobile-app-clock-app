import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './screens/Tabs';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </>
  );
};

export default App;
