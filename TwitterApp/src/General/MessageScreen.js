import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import FooterBottom from './FooterBottom.js';

// dummy page
class Messages extends Component  {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
      <Icon name="mail" style={{color: tintColor}} />
    ),
     }
  
render() {
    return (
      <Container>
        
          <View style={{flex:1}}>
             
       </View>
        <FooterBottom />
        </Container>
      
    );
}
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
});

export default Messages;