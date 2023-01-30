import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, } from 'react-native';
import React, {useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import D_Image from './assets/concert.png';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  const [number, onChangeNumber] = useState('');
  const D_IMAGE = Image.resolveAssetSource(D_Image).uri;
  const [final, setFinal] = useState();

  function handleCLick()  // This Calculates the final output
  {
    setFinal((number * 99.99).toFixed(2)); 
  }

  let texti = '';       //This checks to see of the final output is set to something so then in can print the label.
  if (final > 0) {
    texti = 'Ticket Cost: $'
  } else {texti = ''}

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Ticket Vault
      {'\n'}
      </Text>
      <TextInput style={styles.textinput} placeholder ="Number of Tickets" 
         onChangeText={onChangeNumber}
         value={number}
      />
      <Text style={styles.space} > {'\n'}  </Text>
      <Pressable style ={styles.button}
       onPress={() => {
        handleCLick()
      }} >
      <Text style={styles.buttonText} > Find The Cost</Text>    
      </Pressable>
      <Text style={styles.space} > {'\n'}  </Text>
      <Text style={styles.buttonText} > {texti}{final} </Text>

      <Image style = {styles.image} source={{uri: D_IMAGE}} />
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: 20,
    fontSize: 45,
    fontWeight: 'bold'
  },
  textinput: {
    height: 40,
    width: 300,
    borderColor:'gray',
    borderWidth: 1,      
  },
    button: {
    height: 50,
    width: 240,
    borderColor:'pink',
    backgroundColor: 'pink',
    borderWidth: 1,    
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 34, 
  },
  image: {
    width: 400,
    height: 200
  },
  space: {
    height: 40,
    
  },
});
