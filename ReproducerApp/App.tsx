/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, padding: 8}}>
      <Text style={[styles.text]}>
        This one doesn't have fontWeight - 1, 2, 3, 4
      </Text>
      <Text style={[styles.text, {fontWeight: 'normal'}]}>
        This one has fontWeight: 'normal' - 1, 2, 3, 4
      </Text>
      <Text style={[styles.text, {fontWeight: 'bold'}]}>
        This one has fontWeight: 'bold' - 1, 2, 3, 4
      </Text>
      <Text style={[styles.text, {fontWeight: ''}]}>
        This one has fontWeight: '' - 1, 2, 3, 4
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontVariant: ['oldstyle-nums', 'small-caps'],
  },
});

export default App;
