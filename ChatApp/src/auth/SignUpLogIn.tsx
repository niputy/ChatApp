import React from 'react';
import { Alert, Text, TouchableHighlight, View } from 'react-native';
import { base, colors, components } from '../utils/base';
import { Madoka } from 'react-native-textinput-effects';
import { ErrorMessage, Formik } from 'formik';
import { loginValidationSchema } from '../utils/helpers';
import { pb } from '../api/Api';

const SignUpLogIn = ({ navigation }: any) => {
  return (
    <View style={[base.flex, base.mt5, base.mX]}>
      <Text style={[base.h1, base.textCenter, base.primary]}>Chat App</Text>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={loginValidationSchema}>
        {({ handleChange, handleSubmit, isSubmitting, errors }) => (
          <>
            <Madoka
              style={[base.mt5]}
              label={'Email'}
              onChangeText={handleChange('email')}
              borderColor={colors.secondary}
              labelStyle={base.primary}
              inputStyle={base.primary}
            />
            <Madoka
              style={[base.mt3]}
              label={'Password'}
              onChangeText={handleChange('password')}
              borderColor={colors.secondary}
              labelStyle={base.primary}
              inputStyle={base.primary}
              secureTextEntry
            />
            {errors ? (
              <Text style={[base.mb3, base.h3, base.textCenter, { color: colors.danger }]}>
                <ErrorMessage name="email" />
                {'\n'}
                <ErrorMessage name="password" />
              </Text>
            ) : null}

            <TouchableHighlight
              style={[components.button]}
              underlayColor={colors.tertiary}
              onPress={() => handleSubmit()}
              disabled={isSubmitting}
            >
              <Text style={[base.h3, base.textCenter]}>Sing Up / Log In</Text>
            </TouchableHighlight>
          </>
        )}
      </Formik>
    </View>
  );

  async function onSubmit(user: UserForm) {
    try {
      const data = {
        email: user.email,
        emailVisibility: true,
        password: user.password,
        passwordConfirm: user.password,
      };

      await pb.collection('users').create(data);
    } catch (error: any) {
      console.log(error);
    }
    logIn(user);
  }

  async function logIn(user: UserForm) {
    try {
      await pb.collection('users').authWithPassword(user.email, user.password);
      navigation.replace('Chat');
    } catch (error: any) {
      Alert.alert('Something went wrong, please try again.');
    }
  }
};

export default SignUpLogIn;
