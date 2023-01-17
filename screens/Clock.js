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

const Clock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Text style={styles.upperCaption}>
          The List of Cities
        </Text>
        <View>
        <Pressable style={styles.pressableButtonStyle}>
            <Text style={styles.pressableButtonText}>+</Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
};

// STYLING SECTION
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#f7b733',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperSection: {
    fontSize: 50,
    position: 'absolute',
    top: 25,
    left: 20,
    flexDirection: 'row',
  },
  upperCaption: {
    fontSize: 30,
    color: '#2a3738'
  },
  pressableButtonStyle: {
    marginLeft: 45,
    backgroundColor: '#2a3738',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  pressableButtonText: {
    fontSize: 30,
    color: '#fff',
  }
});

export default Clock;
