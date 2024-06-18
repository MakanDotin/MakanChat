import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import CustomMessage from '../Components/CustomMessage';
import { ImageBackground } from 'react-native';


export default function HomeScreen({route}) {
  const [messages, setMessages] = useState([]);
  const {Persons} = route.params;
  useEffect(() => {
    if(route.params?.Persons.id){
    setMessages(route.params.Persons)
    };
  },[]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
    
  // const renderMessage = (props) => {
  //   return(
  //       <CustomMessage {...props} />
  //   )
  // }
  return (
    
    <GiftedChat
    messages={messages}
    onSend={(messages) => onSend(messages)}
    user={{
        _id: 1,
    }}
    />
    
  );
}
