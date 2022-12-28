import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { base, colors, components } from '../utils/base';
import { API, pb } from '../api/Api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateNewChatModal from './CreateNewChatModal';

const Chat = ({ navigation }: any) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const getChats = async () => {
      const records = await API.getChats();
      setChats(records);
    };
    getChats();
  }, [modalVisible]);

  return (
    <View style={[base.flex]}>
      <View style={[base.flexRow, base.alignItemsCenter, base.m3]}>
        <Text style={[base.flex, base.h1, base.primary]}>Chats</Text>

        <TouchableHighlight style={[styles.logout]} underlayColor={colors.transparent} onPress={logOut}>
          <Icon name="logout" size={34} color={colors.primary} />
        </TouchableHighlight>
      </View>
      {chats?.length === 0 && <Text style={[base.h3, base.textCenter]}>No Chats</Text>}

      <ScrollView style={[base.flex, base.mt5, base.mX]}>
        {chats?.map((chat) => {
          return (
            <TouchableHighlight
              key={chat.id}
              style={[styles.chat]}
              underlayColor={colors.secondary}
              onPress={() => navigation.navigate('Messaging', { params: { chat } })}
            >
              <Text style={[base.h3, base.mX, { color: colors.tertiary }]}>{chat.name}</Text>
            </TouchableHighlight>
          );
        })}
      </ScrollView>

      <TouchableHighlight
        style={[base.m3, components.button]}
        underlayColor={colors.tertiary}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={[base.h3, base.textCenter]}>Start New Chat</Text>
      </TouchableHighlight>

      <CreateNewChatModal isModalVisible={modalVisible} onModalClose={() => setModalVisible(false)} />
    </View>
  );

  async function logOut() {
    pb.authStore.clear();
    navigation.replace('SignUpLogIn');
  }
};

const styles = StyleSheet.create({
  logout: {
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 24,
    width: 62,
  },
  chat: {
    borderColor: colors.primary,
    borderBottomWidth: 1,
    borderRadius: 4,
    paddingVertical: 8,
  },
});

export default Chat;
