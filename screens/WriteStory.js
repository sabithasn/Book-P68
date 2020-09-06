import React from 'react';
import { Text, View } from 'react-native';

export default class WriteStory extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Write Story Here</Text>
        </View>
      );
    }
  }