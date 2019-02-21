import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'jyrno42-react-native-navigation';

type Props = {};
export default class App extends Component<Props> {
  openAnotherModal = () => {
    Navigation.showModal({
      component: {
        name: 'navigation.playground.InModalScreen',
        options: {
          modalPresentationStyle: Platform.OS === 'android' ? 'overCurrentContext' : undefined, // Required on android to force rendering of previous screen behind current modal

          animations: {
            showModal: {
              enable: true,
              enableDeck: true
            },
            hideModal: {
              enable: true,
              enableDeck: true
            }
          }
        }
      }
    })
  };

  closeTheModal = () => {
    const { componentId } = this.props;

    Navigation.dismissModal(componentId);
  };

  render() {
    const colors = ['#25ecc3', '#4b9942', '#f8412c', '#be26a3', '#f3cc2b', '#291ab3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];;

    return (
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TouchableOpacity onPress={this.openAnotherModal}>
          <Text style={styles.instructions}>Open another modal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.closeTheModal}>
          <Text style={styles.instructions}>Close this modal</Text>
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
    elevation: 4,
    marginVertical: Platform.OS === 'android' ? 32 : 0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});
