import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PurityCScreen from './src/screens/PurityCScreen';
import PurityCFinestScreen from './src/screens/PurityCFinestScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <ImageBackground source={require("./img/blackbeans.jpg")} style={styles.image}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => {navigation.navigate('Purity C')}}><Text style={styles.buttonText}>Purity C</Text></TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => {navigation.navigate('Purity C Finest')}}><Text style={styles.buttonText}>Purity C Finest</Text></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Purity C" component={PurityCScreen} />
        <Stack.Screen name="Purity C Finest" component={PurityCFinestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: '5%'
  },
  button: {
    backgroundColor: "#006992",
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    height: 49,
    borderRadius: 10
  },
  buttonText: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 20
  }
});

export default App;
