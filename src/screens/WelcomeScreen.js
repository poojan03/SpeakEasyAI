import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1,justifyContent:'space-around',backgroundColor:'white'}}>
      <View  >
        <Text style={{textAlign:'center',color:'gray',fontSize:wp(10),fontWeight:'bold',lineHeight:40}} >Jarvis</Text>
        <Text style={{textAlign:'center',color:'gray',fontSize:wp(4),fontWeight:'semibold',lineHeight:40}} >
            The Future is here, powered by AI.
        </Text>
      </View>
      <View style={{justifyContent:'center', paddingLeft:45}}>
      <Image source={require('../../assets/images/bot.png') } style={{width: wp(75),height: wp(75)}} />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{marginRight:19.2,marginLeft:19.2,padding:16,borderRadius:10,backgroundColor:'rgb(5 150 105)'}}>
            <Text style={{textAlign:'center',fontWeight:'bold',color:'white',fontSize:wp(6),lineHeight:32}} >Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}