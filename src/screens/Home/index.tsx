import { View, Text, Button } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { database } from "../../config/firebase";
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Password from '../../components/Password';

export default function Home() {
  const navigation = useNavigation();
  const [passwords, setPasswords] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Add')}
          title="Add"
          color="#000"
        />
      ),
    });
  }, [])


  useEffect(() => {
    const q = query(collection(database, "passwords"), orderBy("socialNet"));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const passwordsArray : any = [];
      querySnapshot.forEach((doc) => {
        //sed id to the object
        passwordsArray.push({id: doc.id, ...doc.data()});
      });
      setPasswords(passwordsArray);
    });
    return unsubscribe;
    
  }, [])
  

  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <Text style={{ fontSize: 20, marginVertical: 20, marginLeft: 10 }}>Your passwords</Text>
      {passwords.map((password : any) => (
        <Password {...password} key={password.user}/>
      ))}
    </View>
  )
}