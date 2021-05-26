/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import PagerView from 'react-native-pager-view';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1" style={styles.page}>
          <Text>First page</Text>
        </View>
        <View key="2" style={styles.page}>
          <Text>Second page</Text>
        </View>
        <View key="3" style={styles.page}>
          <Text>Third page</Text>
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
