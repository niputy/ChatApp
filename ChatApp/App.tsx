import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SignUpLogIn from './src/auth/SignUpLogIn';
import { base, colors } from './src/utils/base';
import { DismissKeyboard } from './src/utils/helpers';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './src/chat/Chat';
import Messaging from './src/chat/Messaging';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <DismissKeyboard>
      <SafeAreaView style={[base.bg, base.flex]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SignUpLogIn" component={SignUpLogIn} options={{ headerShown: false }} />
            <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
            <Stack.Screen
              name="Messaging"
              component={Messaging}
              options={({ route }: any) => ({ title: route.params.params.chat.name })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default App;
