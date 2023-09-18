import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Image,Background,ImageBackground,TouchableOpacity,Animated,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Text } from 'react-native';
import { login_auth } from './Auth.js'; 




const Cat = () => {
    const navigation = useNavigation();
   

    const [password, setPassword] = useState('');
  
   

    
    const forceUpdate = () => {
        setUpdateState({});
    };

    const [updateState, setUpdateState] = React.useState({});
    
    return (
      
     /* <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Comportamento para evitar o teclado
      style={styles.container}
    >*/

        
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://movementrade.fredericoavo.com/wp-content/uploads/2023/07/9e2e04da-3370-47f9-818a-b0e0b680b677.jpg'}} />
      <View style={styles.subContainer}>
      <Image style={styles.logoImage} source={{ uri: 'https://goagency.pt/wp-content/uploads/2020/12/Go.png' }} />
      
        
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder={('password')}
            placeholderTextColor="#003f5c"
            value={password} 
            onChangeText={(text) => setPassword(text)}
            />
        </View>
       
        <TouchableOpacity style={styles.loginBtn} onPress={login_auth}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

       

       

  </View>
      </View>

     // </KeyboardAvoidingView>
  
    );
  };

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
},

subContainer: {
  ...StyleSheet.absoluteFillObject,
   alignItems: 'center',
  justifyContent: 'center',
},

logoImage: {
  width:250,
  height: 200,
  marginBottom: 20,
  resizeMode: 'contain',
  
  
},

languageContainer: {
   position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},

languageButton: {
  paddingHorizontal: 15,
  paddingVertical: 10,
  marginHorizontal: 5,
  
  borderRadius: 20,
},

languageText: {
  fontSize: 16,
  color:"#fff",
 

  
},

selectedLanguageText: {
  fontWeight: 'bold',
  color:'#fff' 
 
},

languageText: {
  fontSize: 16,
  
  color:'white'
},

inputView:{
  width:"80%",
  backgroundColor:"#fff",
  borderRadius:25,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:20
},

loginBtn:{
  width:"80%",
  color:"#fff",
  backgroundColor:"#606060",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:10,
  marginBottom:10
},

  container1: {
    resizeMode: 'cover', 
    alignItems:'center',
    width: '100%',
    paddingLeft:40,
    paddingRight:40,
    flex: 1,
    justifyContent: 'center',
 },

  
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems:'center',
  },

  loginText:{
    color:"white"
  },

  button: {
    width: 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#fff',
    marginTop: 50, 
  },

  buttonText: {
    color:'#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  inputContainerError: {
    borderBottomColor: 'red',
  },

  overlay: {
    flex:1,
 
    justifyContent: 'center',
    alignItems: 'center',
  },
 input: {
    justifyContent: 'center',
    width: '100%',
    
   
    borderColor: '#000',
   
    color:'black',
   paddingBottom:20,
    paddingHorizontal: 30,
    paddingTop:20,
    
  

  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
   
    
  },
  inputText: {
    height: 50,
    color: 'black',
    textAlign: 'center', 
  },
});

Cat.options = {
    headerShown: false,
  };

export default Cat;