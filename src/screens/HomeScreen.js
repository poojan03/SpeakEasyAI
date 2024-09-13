import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/features';
//import Features from '../components/features';
import { dummyMessages } from '../constants';
import Voice from '@react-native-community/voice';

export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
    const [recording, setRecording] = useState(false)
    const [speaking, setSpeaking] = useState(true)
    const [result,setResult] = useState('')

    const speechStartHandler =e=>{
        console.log('speech start handler')
    }
    
    const speechEndHandler =e=>{
        setRecording(false)
        console.log('speech End handler')
    }
    
    const speechResultsHandler =e=>{
        console.log('Voice event:',e)
        const text = e.value[0]
        setResult(text)
    }
    
    const speechErrorHandler =e=>{
        console.log('speech error handler: ',e)
    }

    const startRecording = async ()=>{
        setRecording(true);
        try{

         await  Voice.start('en-GB');
        }catch(error){
            console.log('error: ',error);
        }
    }

    const stopRecording = async ()=>{
        
        try{

         await  Voice.stop();
         setRecording(false);
        }catch(error){
            console.log('error: ',error);
        }
    }

    const clear =()=>{
        setMessages([]);
    }
    const stopSpeaking =()=>{
        setSpeaking(false);
    }

    useEffect (()=>{
        Voice.onSpeechStart = speechStartHandler;
        Voice.onSpeechEnd = speechEndHandler;
        Voice.onSpeechResults = speechResultsHandler;
        Voice.onSpeechError = speechErrorHandler; 

        return()=>{
            Voice.destroy().then(Voice.removeAllListeners);
        }
    },[])

    //console.log('result: ',result)


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SafeAreaView style={{ flex: 1, marginRight: 19.2, marginLeft: 19.2, }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/images/bot.png')} style={{ height: hp(15), width: hp(15) }} />
                </View>
                {
                    messages.length > 0 ? (
                        <View style={{ flex: 1, marginTop: 8 }}>
                            <Text style={{ fontSize: wp(5), fontWeight: 'semibold', Color: 'rgb(5 150 105)', marginLeft: 5, marginBottom: 5 }} >Assistant</Text>
                            <View style={{ height: hp(58), padding: 16, borderRadius: 24, backgroundColor: 'rgb(229 229 229)' }}>
                                <ScrollView bounces={false} style={{ marginTop: 16 }} showsVerticalScrollIndicator={false}>
                                {
                                        messages.map((message, index) => {
                                            if (message.role == 'assistant') {
                                                if (message.content.includes('https')) {
                                                    return (

                                                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                            <View style={{ padding: 2, borderRadius: 16, backgroundColor: 'rgb(209 250 229)', borderTopLeftRadius: 0, marginTop: 10 }}>
                                                                <Image source={{ uri: message.content }} style={{ height: wp(60), width: wp(60), borderRadius: 16, resizeMode: 'contain' }} />
                                                            </View>
                                                        </View>
                                                    )


                                                } else {
                                                    return (

                                                        <View key={index} style={{ width: wp(70), borderRadius: 12, backgroundColor: 'rgb(209 250 229)', padding: 8, marginTop: 10, borderTopLeftRadius: 0 }}>
                                                            <Text>
                                                                {message.content}
                                                            </Text>
                                                        </View>


                                                    )

                                                }
                                            } else {
                                                return (
                                                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                                        <View style={{ width: wp(70), borderRadius: 12, backgroundColor: 'white', padding: 8, marginTop: 10, borderTopRightRadius: 0 }}>
                                                            <Text>
                                                                {message.content}
                                                            </Text>
                                                        </View>

                                                    </View>
                                                )
                                            }
                                            // return(
                                            //     <View>
                                            //         <Text>{message.content}</Text>
                                            //     </View>
                                            // )
                                        })
                                    }
                                </ScrollView>
                        </View>
                        </View>
                    ) : (
                        <Features />
                    )
                }
                <View style={{ justifyContent: 'center', alignItems: 'center',flex:0 }} >
                    {
                        recording ? (
                            <TouchableOpacity onPress={stopRecording} >
                                <Image source={require('../../assets/images/mic2.gif')} style={{ height: hp(10), width: hp(10), borderRadius: 9999 }} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={startRecording} >
                                <Image source={require('../../assets/images/mic.png')} style={{ height: hp(10), width: hp(10), borderRadius: 9999 }} />
                            </TouchableOpacity>
                        )


                    }
                    {
                        messages.length>0 &&(
                            <TouchableOpacity onPress={clear} style={{borderRadius:24,backgroundColor:'rgb(163 163 163)',position:'absolute',right:40,padding:8}}>
                                <Text style={{color:'white',fontWeight:'semibold'}}>Clear</Text>
                            </TouchableOpacity>
                        )
                    } 
                    {
                        speaking && (
                            <TouchableOpacity onPress={stopSpeaking} style={{borderRadius:24,backgroundColor:' rgb(248 113 113)',position:'absolute',left:40,padding:8}}>
                                <Text style={{color:'white',fontWeight:'semibold'}}>Stop</Text>
                            </TouchableOpacity>
                        )
                    }

                </View>
            </SafeAreaView>
        </View>
    )
}