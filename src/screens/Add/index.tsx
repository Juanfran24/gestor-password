import { View, Text, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { styles } from "./styles";
import Select from 'react-native-dropdown-picker';
import { useNavigation } from "@react-navigation/native";
import { database } from "../../config/firebase";
import { collection, addDoc } from 'firebase/firestore';
import { selectImage } from '../../utils/selectImage';

export default function Add() {
  const navigation = useNavigation();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccesful, setIsSuccesful] = useState(false);
  const [socialNetOpen, setSocialNetOpen] = useState(false);
  const [socialNetValue, setSocialNetValue] = useState('');
  const [socialNetItems, setSocialNetItems] = useState([
    {label: 'Facebook', value: 'facebook'},
    {label: 'Instagram', value: 'instagram'},
    {label: 'Twitter', value: 'twitter'},
    {label: 'LinkedIn', value: 'linkedin'},
    {label: 'YouTube', value: 'youtube'},
    {label: 'TikTok', value: 'tiktok'},
    {label: 'Pinterest', value: 'pinterest'},
    {label: 'Snapchat', value: 'snapchat'},
    {label: 'Twitch', value: 'twitch'},
    {label: 'Other...', value: 'other'},
  ]);

  const onSave = async () => {
    const data = {
      urlImage: selectImage(socialNetValue),
      socialNet: socialNetValue,
      user,
      password,
    }
    try {
      const docRef = await addDoc(collection(database, "passwords"), data);
      setIsSuccesful(true);
      setTimeout(() => {
        navigation.goBack();
      }, 1500);
    } catch (e) {
      console.error(e);
      setIsError(true);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Register a new password</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Social network</Text>
        <Select 
          open={socialNetOpen}
          value={socialNetValue}
          items={socialNetItems}
          setOpen={setSocialNetOpen}
          setValue={setSocialNetValue}
          setItems={setSocialNetItems}
          placeholder="Select a social network"
          placeholderStyle={{color: 'gray'}}
          
        />
        <Text style={styles.label}>Enter your user</Text>
        <TextInput 
          style={styles.input} 
          placeholder="User" 
          value={user} 
          onChangeText={(e) => setUser(e)} 
          selectionColor={'#000'}
        />
        <Text style={styles.label}>Enter your password</Text>
        <TextInput 
          secureTextEntry
          style={styles.input} 
          placeholder="Password" 
          value={password} 
          onChangeText={(e) => setPassword(e)} 
          selectionColor={'#000'}
        />
        {isError && <Text style={{color: 'red'}}>Ocurrio algo inesperado...</Text>}
        {isSuccesful && <Text style={{color: 'green'}}>Se guardo correctamente</Text>}
        <View style={styles.button}>
          <Button title="Save" onPress={onSave} disabled={password === '' || user === '' || socialNetValue === ''}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}