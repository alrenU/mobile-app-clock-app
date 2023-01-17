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
  var timer;

  const [hourState, setHourState] = useState(0);
  const [minutesState, setMinutesState] = useState(0);
  const [secondsState, setSecondsState] = useState(0);
  const [millisecondsState, setMillisecondsState] = useState(0);

  const [hoursArrayState, setHoursArrayState] = useState([]);
  const [minutesArrayState, setMinutesArrayState] = useState([]);
  const [secondsArrayState, setSecondsArrayState] = useState([]);
  const [millisecondsArrayState, setMillisecondsArrayState] = useState([]);

  const [timerState, setTimerState] = useState(false);
  const [timeStampState, setTimeStampState] = useState(false);

  const startTimer = () => {
    timerState != true
      ? (timer = setInterval(updateTimerValues, 100))
      : clearInterval(timer);
    timerState != true ? setTimerState(true) : setTimerState(false);
  };

  const setLapValues = () => {
    setHoursArrayState([...hoursArrayState, hourState]);
    setMinutesArrayState([...minutesArrayState, minutesState]);
    setSecondsArrayState([...secondsArrayState, secondsState]);
    setMillisecondsArrayState([...millisecondsArrayState, millisecondsState]);
  }

  const updateTimerValues = () => {
    milliseconds += 1;
    setMillisecondsState(milliseconds);

    if (milliseconds > 9) {
      milliseconds = 0;
      seconds += 1;
      setSecondsState(seconds);
    }
    if (seconds > 59) {
      seconds = 0;
      minutes += 1;
      setMinutesState(minutes);
    }
    if (minutes > 59) {
      minutes = 0;
      hours += 1;
      setHourState(hours);
    }
    if (hours > 23) {
      hours = 0;
      setHourState(hours);
    }
  };

  return (
    <>
    <View style={styles.container}>
      <View style={styles.upperTimerSection}>
        <Text style={styles.timerCounter}>
          {hourState}:{minutesState}:{secondsState}:{millisecondsState}
        </Text>
        <Pressable
          style={styles.pressableStyle}
          onPress={() => {
            startTimer();
          }}>
          <Text style={styles.buttonTextStyle}>
            {timerState != true ? 'Start Timer' : 'Stop Timer'}
          </Text>
        </Pressable>
        <Pressable
          style={styles.lapPressableStyle}
          onPress={() => {
            setLapValues()
          }}>
          <Text style={styles.buttonTextStyle}>Lap</Text>
        </Pressable>
      </View>
      <View style={styles.lineStyle} />
      <View>
        {
          hoursArrayState[0] >= 0 ? (<Text style={styles.lapStyling}>Lap 1: {hoursArrayState[0]}:{minutesArrayState[0]}:{secondsArrayState[0]}:{millisecondsArrayState[0]}</Text>) : null
        }
      </View>
    </View>
    </>
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
  lapPressableStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#2a3738',
    width: 150,
    marginTop: 10,
  },
  lineStyle:{
    position: 'absolute',
    top: 200,
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
    width: 200,
  },
  timeStampStyle: {
    fontSize: 30,
    color: '#2a3738',
  },
  lapStyling: {
    fontSize: 30
  }
});

export default Timer;
