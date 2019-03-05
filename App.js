/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'jyrno42-react-native-navigation';

type Props = {};
export default class App extends Component<Props> {
  openModal = () => {
    Navigation.showModal({
      component: {
        name: 'navigation.playground.InModalScreen',
        passProps: {
          stackDepth: 1
        },
        options: {
          modalPresentationStyle: Platform.OS === 'android' ? 'overCurrentContext' : undefined, // Required on android to force rendering of previous screen behind current modal

          animations: {
            showModal: {
              enable: true,
              enableDeck: true
            },
            dismissModal: {
              enable: true,
              enableDeck: true
            }
          }
        }
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} testID="WELCOME">Welcome to React Native!</Text>
        <TouchableOpacity testID="ROOT_OPEN_MODAL">
          <Text onPress={this.openModal} style={styles.link}>Open a modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  link: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
  },
});
