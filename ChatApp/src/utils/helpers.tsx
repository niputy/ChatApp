import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email!').required('Email Address is Required!'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters!`)
    .required('Password is required!'),
});

export const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);
