import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Home from './screens/home';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'Nunito-Regular':require('./assets/fonts/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'reg':require('./assets/fonts/Roboto-Regular.ttf'),
  'bold': require('./assets/fonts/Roboto-Bold.ttf'),
});


export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)} 
      onError={() => console.log('error')}
      />
    )
  }
}