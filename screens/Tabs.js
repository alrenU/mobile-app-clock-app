import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Alarm from './Alarm';
import Hourglass from './Hourglass';
import Timer from './Timer';
import Clock from './Clock';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false
      }}>
      <Tab.Screen
        name="Alarm"
        component={Alarm}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconStyling}>
              <Image
                source={require('../assets/bell.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#110d03' : '#898980'
                }}
              />
              <Text style={{color: focused ? '#110d03' : '#898980', fontSize: 12}}>Alarm</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Hourglass"
        component={Hourglass}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconStyling}>
              <Image
                source={require('../assets/hourglass.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#110d03' : '#898980',
                }}
              />
              <Text style={{color: focused ? '#110d03' : '#898980', fontSize: 12}}>Hourglass</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconStyling}>
              <Image
                source={require('../assets/timer.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#110d03' : '#898980',
                }}
              />
              <Text style={{color: focused ? '#110d03' : '#898980', fontSize: 12}}>Timer</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Clock"
        component={Clock}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconStyling}>
              <Image
                source={require('../assets/time.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#110d03' : '#898980',
                }}
              />
              <Text style={{color: focused ? '#110d03' : '#898980', fontSize: 12}}>Clock</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyling: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tabs;
