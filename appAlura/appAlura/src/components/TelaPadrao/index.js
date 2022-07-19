import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import estilos from './estilos';

export default function TelaPadrao({children}) {
  return (
    <SafeAreaView>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
