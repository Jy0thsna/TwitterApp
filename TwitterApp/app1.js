import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import { Container, Header, Content, TabHeading, Tab, Tabs, Text, Left, Button, Icon, Body, Right, Title, Fab, FooterTab, Footer, Thumbnail, Item, Input } from 'native-base';
import Expo from 'expo';
import Feed from './src/Timeline/HomeFeed';
import SearchScreen from './src/Timeline/SearchScreen';


export default class Screens extends React.Component {

  render() {
    return (
      <Container>
            <Header searchBar>
              <Left>
                <Button transparent>
                     <Thumbnail source={require('./src/Timeline/thumbnail.jpg')} small />
                </Button>
                </Left>
                <Body >
                 
                 <Item rounded style={{width: 200, backgroundColor: 'lightgrey'}}>
                <Input placeholder="Search Twitter"/>
                  </Item>
                </Body>
               
              <Right>
              <Icon name="add" style={{color: 'white'}} />
              </Right>
            </Header>

      <Tabs>
        <Tab heading={<TabHeading><Icon name='home'/></TabHeading>}>
          <Feed />
        </Tab>
        <Tab heading={<TabHeading><Icon name='search'/></TabHeading>}>
         <SearchScreen />
        </Tab>
        <Tab  heading={<TabHeading><Icon name='md-notifications'/></TabHeading>}>
        <Text style={{marginTop: 30}}>Notifications</Text>
        </Tab>
        <Tab heading={<TabHeading><Icon name='md-mail'/></TabHeading>}>
        <Text style={{marginTop:30}}>Direct Messages</Text>
        </Tab>
      </Tabs>
          <Fab
            direction="up"
            style={{ backgroundColor: '#3498db', marginBottom: 30 }}
            position="bottomRight">
            <Icon name="md-create" />
          </Fab>
        <Footer style={{backgroundColor: 'white'}}>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button >
              <Text style={{fontSize: 12, color: '#3498db', fontWeight: 'bold'}}>All</Text>
            </Button>
            <Button>
              <Text style={{fontWeight: 'bold'}}>Mentions</Text>
            </Button>
            
          </FooterTab>
          <Right>
              <Icon style={{ marginRight: 10, color:'#3498db'}} name='settings'></Icon>
          </Right>
        </Footer>

    </Container>
    );
  }
}