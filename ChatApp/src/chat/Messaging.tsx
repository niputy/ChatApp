import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { base } from '../utils/base';
import { API, pb } from '../api/Api';
import { GiftedChat } from 'react-native-gifted-chat';

const Messaging = (props: any) => {
  const chat: Chat = props.route.params.params.chat;
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      const newMessages = await API.getMessages(chat.id);
      setMessages(newMessages);
    };
    getMessages(); // initial call

    /* Not the best solution but the realtime pocketbase doesn't work properly on React native. */
    const interval = setInterval(() => {
      getMessages();
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSend = useCallback(async (message: any) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, message));

    const data = {
      text: message[0].text,
      send_by: pb.authStore.model!.email,
      chat_id: chat.id,
    };
    await pb.collection('messages').create(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[base.flex]}>
      <GiftedChat
        messages={messages}
        onSend={(m: any) => onSend(m)}
        user={{
          _id: pb.authStore.model!.email,
        }}
      />
    </View>
  );
};

export default Messaging;
