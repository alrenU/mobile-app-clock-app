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

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <StatusBar backgroundColor="#f7b733" barStyle="dark-content" />
      </View>
      <View>
        <Text>It Works!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b733'
  }
});

export default App;