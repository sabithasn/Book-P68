import React from 'react';
import { Text, View } from 'react-native';

export default class ReadStory extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Enjoy your story here</Text>
        </View>
      );
    }
  }