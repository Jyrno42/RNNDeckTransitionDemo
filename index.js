/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Platform } from 'react-native';
import { Navigation } from "jyrno42-react-native-navigation";
import App from './App';
import Modal from './Modal';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(`navigation.playground.InModalScreen`, () => Modal);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.playground.WelcomeScreen",

                ...Platform.select({
                    android: {
                        options: {
                            // This makes the deck transition effect nicer
                            layout: { backgroundColor: '#000' }
                        }
                    }
                })
            },
        }
    });
});