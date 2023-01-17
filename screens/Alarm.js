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

const Alarm = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.upperSection}>
          <Text style={styles.upperCaption}>Active Alarms</Text>
          <View>
            <Pressable style={styles.pressableButtonStyle}>
              <Text style={styles.pressableButtonText}>Add an Alarm</Text>
            </Pressable>
          </View>
        </View>
        <View style = {styles.lineStyle} />
        <View style={styles.alarmStyling}>
          <Text style={styles.alarmTimeStyling}>10:00</Text>
          <Text style={styles.alarmMessageStyling}>Go to School</Text>
          <Image style={styles.alarmIconStyling} source={require('../assets/pencil.png')} />
          <Image style={styles.alarmIconStyling} source={require('../assets/bin.png')} />
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
  lineStyle:{
    position: 'absolute',
    top: 100,
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
    width: 200,
  },
  alarmStyling: {
    flexDirection: 'row',
    position: 'absolute',
    top: 150
  },
  alarmTimeStyling: {
    fontSize: 20,
    marginRight: 20,
    color: '#1c1c1a'
  },
  alarmMessageStyling: {
    fontSize: 20,
    marginRight: 70,
    color: '#1c1c1a'
  },
  alarmIconStyling: {
    width: 20,
    height: 20,
    marginLeft: 15,
  }
});

export default Alarm;
