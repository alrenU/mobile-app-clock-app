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

const Hourglass = () => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let timer;
  const [hourState, setHourState] = useState(0);
  const [minutesState, setMinutesState] = useState(0);
  const [secondsState, setSecondsState] = useState(0);
  const [millisecondsState, setMillisecondsState] = useState(0);
  const [timerState, setTimerState] = useState(false);

  const startHourglass = () => {
    timer = setInterval(updateTimerValues, 100);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const updateTimerValues = () => {
    milliseconds = millisecondsState;
    seconds = secondsState;
    minutes = minutesState;
    hours = hourState;

    if (milliseconds > 0) {
      milliseconds -= 1;
    }
    if (seconds > 0) {
      if (milliseconds == 0) {
        milliseconds = 9;
        seconds -= 1;
      }
    }
    if (minutes > 0) {
      if (seconds == 0) {
        seconds = 59;
        minutes -= 1;
      }
    }
    if (hours > 0) {
      if (minutes == 0) {
        minutes = 59;
        hours -= 1;
      }
    }

    setMillisecondsState(milliseconds);
    setSecondsState(seconds);
    setMinutesState(minutes);
    setHourState(hours);
  };

  const setHourStateFunc = input => {
    if (input < 24 && input > -1) {
      setHourState(input);
    }
  };
  const setMinutesStateFunc = input => {
    if (input < 60 && input > -1) {
      setMinutesState(input);
    }
  };
  const setSecondsStateFunc = input => {
    if (input < 60 && input > -1) {
      setSecondsState(input);
    }
  };
  const setMillisecondsStateFunc = input => {
    if (input < 10 && input > -1) {
      setMillisecondsState(input);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.hourglassSection}>
        <TextInput
          style={styles.inputArea}
          placeholder="0"
          keyboardType="numeric"
          onChangeText={number => setHourStateFunc(number)}
          value={hourState.toString()}
        />
        <Text style={{fontSize: 40}}>:</Text>
        <TextInput
          style={styles.inputArea}
          placeholder="0"
          keyboardType="numeric"
          onChangeText={number => setMinutesStateFunc(number)}
          value={minutesState.toString()}
        />
        <Text style={{fontSize: 40}}>:</Text>
        <TextInput
          style={styles.inputArea}
          placeholder="0"
          keyboardType="numeric"
          onChangeText={number => setSecondsStateFunc(number)}
          value={secondsState.toString()}
        />
        <Text style={{fontSize: 40}}>:</Text>
        <TextInput
          style={styles.inputArea}
          placeholder="0"
          keyboardType="numeric"
          onChangeText={number => setMillisecondsStateFunc(number)}
          value={millisecondsState.toString()}
        />
      </View>
      <Pressable
        style={styles.pressableStyle}
        onPress={() => {
          startHourglass();
        }}>
        <Text style={styles.buttonTextStyle}>Start Hourglass</Text>
      </Pressable>
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
  timerCounter: {
    fontSize: 50,
    color: '#fff',
  },
  hourglassSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputArea: {
    fontSize: 40,
  },
  pressableStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#2a3738',
    width: 200,
  },
  buttonTextStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Hourglass;
