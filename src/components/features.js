import { View, Text,Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp(60),marginTop:16}}>
      <Text style={{fontSize: wp(6.5) , fontWeight:'semibold', Color:'rgb(5 150 105)'}} >Features</Text>
      <View style={{padding:16,backgroundColor: 'rgb(167 243 208)',borderRadius:12,marginTop:8}}>
        <View style={{marginLeft:4,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/images/Chatgpticon.png')} style={{height: hp(4),width:hp(4)}}/>
            <Text style={{fontSize: wp(4.8),fontWeight:'bold',color: 'rgb(55 65 81)',padding:5}}>ChatGPT</Text>
        </View>
        <Text style={{fontSize: wp(3.8),fontWeight:'medium',color: 'rgb(55 65 81)', marginTop:6}}>
            ChatGPT can provide you with instant and knowledgeble responses, assist you with creative ideas on a wide range of topics.
        </Text>
      </View>
      <View style={{padding:16,backgroundColor: 'rgb(233 213 255)',borderRadius:12,marginTop:8}}>
        <View style={{marginLeft:4,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/images/dalleIcon.png')} style={{height: hp(4),width:hp(4)}}/>
            <Text style={{fontSize: wp(4.8),fontWeight:'bold',color: 'rgb(55 65 81)',padding:5}}>Dall-E</Text>
        </View>
        <Text style={{fontSize: wp(3.8),fontWeight:'medium',color: 'rgb(55 65 81)', marginTop:6}}>
           DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>
      <View style={{padding:16,backgroundColor: 'rgb(165 243 252)',borderRadius:12,marginTop:8}}>
        <View style={{marginLeft:4,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/images/smartaiIcon.png')} style={{height: hp(4),width:hp(4)}}/>
            <Text style={{fontSize: wp(4.8),fontWeight:'bold',color: 'rgb(55 65 81)',padding:5}}>Smart AI</Text>
        </View>
        <Text style={{fontSize: wp(3.8),fontWeight:'medium',color: 'rgb(55 65 81)', marginTop:6}}>
            A powerful voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both Worids.
        </Text>
      </View>
    </View>
  )
}