import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { deleteDoc, doc } from 'firebase/firestore';
import { database } from "../../config/firebase";


export default function Password({
  id,
  urlImage,
  socialNet,
  user,
  password,
} : any) {

  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  }

  const onDelete = () => {
    deleteDoc(doc(database, "passwords", id));
    alert("¡Password deleted!");
  }

  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', right: '5%', top: '5%' }}>
        <AntDesign name="delete" size={24} color="red" onPress={onDelete}/>
      </View>

      <Image source={{uri: urlImage}} style={styles.image}/>
      <Text>Social network: {socialNet}</Text>
      <Text>User: {user}</Text>
      {showPass ? 
        <>
          <Text>Password: {password}</Text> 
          <View style={{ position: 'absolute', right: '10%', bottom: '10%' }}>
            <AntDesign name="eye" size={24} color="black" onPress={handleShowPass} />
          </View>
        </>
        : 
        <>
          <Text>Password: ********</Text>
          <View style={{ position: 'absolute', right: '10%', bottom: '10%' }}>
              <Ionicons name="ios-eye-off" size={24} color="black" onPress={handleShowPass}/>
          </View>
        </>
      }
    </View>
  )
}