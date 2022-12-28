import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { base, colors, components } from '../utils/base';
import Modal from 'react-native-modal/dist/modal';
import { Madoka } from 'react-native-textinput-effects';
import { pb } from '../api/Api';

interface IProps {
  isModalVisible: boolean;
  onModalClose: () => void;
}

const CreateNewChatModal: React.FC<IProps> = (props: IProps) => {
  const { isModalVisible, onModalClose } = props;
  const [name, setName] = useState<string>('');

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={onModalClose} animationOutTiming={700}>
      <View style={[styles.modal, base.bg]}>
        <Text style={[base.mt3, base.h3, base.textCenter]}>Create New Chat</Text>

        <Madoka
          style={[base.mt5, base.mX]}
          label={'Chat Name'}
          onChangeText={(text) => setName(text)}
          borderColor={colors.secondary}
          labelStyle={base.primary}
          inputStyle={base.primary}
        />

        <View style={[base.flexRow]}>
          <TouchableHighlight
            style={[base.flex, base.m3, components.button, { backgroundColor: colors.dangerLight }]}
            underlayColor={colors.danger}
            onPress={onModalClose}
          >
            <Text style={[base.h3, base.textCenter]}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[base.flex, base.m3, components.button]}
            underlayColor={colors.tertiary}
            onPress={() => createNewChat()}
          >
            <Text style={[base.h3, base.textCenter]}>Create</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );

  async function createNewChat() {
    try {
      if (!name) {
        return Alert.alert('Please add chat name.');
      }
      await pb.collection('chats').create({ name });
      setName('');
      onModalClose();
    } catch (error) {
      Alert.alert('Something went wrong, please try again.');
    }
  }
};

const styles = StyleSheet.create({
  modal: {
    borderRadius: 4,
  },
});

export default CreateNewChatModal;
