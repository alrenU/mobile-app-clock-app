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
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Clock = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.upperSection}>
          <Text style={styles.upperCaption}>The Cities</Text>
          <View>
            <Pressable style={styles.pressableButtonStyle}>
              <Text style={styles.pressableButtonText}>Add a City</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.lowerSection}>
        </View>
      </View>
    </>
  );
};

// STYLING SECTION
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7b733',
  },
  upperSection: {
    fontSize: 50,
    position: 'absolute',
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  upperCaption: {
    fontSize: 30,
    color: '#2a3738',
  },
  lowerSection: {
    backgroundColor: '#Fdfeb4',
    position: 'absolute',
    top: 120,
    width: 370,
    height: 480,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  pressableButtonStyle: {
    marginTop: 5,
    backgroundColor: '#2a3738',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5
  },
  pressableButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Clock;
