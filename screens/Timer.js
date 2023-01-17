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

const Timer = () => {
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

  const startTimer = () => {
    timer = setInterval(updateTimerValues, 100);
  };

  const stopTimer = () => {
    clearInterval(timer)
  }

  const updateTimerValues = () => {
    milliseconds += 1;
    setMillisecondsState(milliseconds);

    if(milliseconds > 9) {
        milliseconds = 0;
        seconds += 1;
        setSecondsState(seconds);
    }
    if(seconds > 59) {
        seconds = 0;
        minutes += 1;
        setMinutesState(minutes);
    }
    if(minutes > 59) {
        minutes = 0;
        hours += 1;
        setHourState(hours);
    }
    if(hours > 23) {
        hours = 0;
        setHourState(hours);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperTimerSection}>
        <Text style={styles.timerCounter}>
          {hourState}:{minutesState}:{secondsState}:{millisecondsState}
        </Text>
        {timerState == false ? (
          <Pressable
            style={styles.pressableStyle}
            onPress={() => {
                startTimer();
            }}>
            <Text style={styles.buttonTextStyle}>Start Timer</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.pressableStyle}
            onPress={() => {
                stopTimer();
            }}>
            <Text style={styles.buttonTextStyle}>Stop Timer</Text>
          </Pressable>
        )}
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
  timerCounter: {
    fontSize: 50,
    color: '#2a3738',
  },
  upperTimerSection: {
    position: 'absolute',
    top: 25,
    // marginBottom: 300,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Timer;
