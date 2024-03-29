import { StatusBar } from 'react-native'

import { Routes } from '@routes/index';

import { ThemeProvider } from 'styled-components/native';

import { Loading } from '@components/Loading';

import { theme } from './src/theme'

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoader ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
