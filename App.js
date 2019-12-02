/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Weather from './src/components/Weather'

class App extends Component {

    componentDidMount() {
      // return
      // fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
      // .then(res => res.json())
      // .then((data) => {
      //   this.setState({ nasa : data }, function(){
      //   })})
      // })
      // .catch(console.log)

      return fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }

  render() {
    return (
      <Weather nasa={this.responseJson.dataSource} />
      
    );
  }
}



export default App;
