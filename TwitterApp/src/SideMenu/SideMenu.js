import React from 'react';
import { Image, StatusBar, Settings } from 'react-native';
import {
  Header,
  Footer,
  Left,
  Right,
  Card,CardItem,
  Text,Body,
  Container,
  Thumbnail,
  List,
  ListItem,
  Content,
  View,
  Icon
} from 'native-base';

//route name and icon as needs to be shown on the side bar 
const routes = [{name: "Profile",icon: 'contact'},{name: "Lists", icon: 'list-box'},{name: "Moments",icon: 'thunderstorm'}, {name: 'Highlights',icon:'pricetags'} ];
let userdetails='';

export default class SideBar extends React.Component {
 
  constructor() {
    super();
    
    //hardcoding userdetails info as json
    userdetails = {
          username: 'John Doe',
          userid: '@TwitterID',
          following: 450,
          followers: 200,
        };
        
  }

  
  render() {

    //destructuring user info from prop
    const {username, userid,thumbnail,following,followers} = userdetails;
   
    return (
      <Container>
        <Content>
        <Card>
            <CardItem >
            <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
              
              <Thumbnail source={require('../General/thumbnail.jpg')} />
              <Text style={{fontWeight: 'bold'}}>{username}</Text>
              <Text note>{userid}</Text>
                  
              
              <View style = {{flexDirection: 'row'}} >
                <Text>{following} Following </Text>
                <Text >{followers} Followers</Text>
              </View>
            </View>
            </CardItem>
           
        
          <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>

          {/* Show list of routes and its icon, and navigate to the route when pressed */}
          <List
            dataArray={routes}
            renderRow={info => {
              return (
                <ListItem
                  button noborder
                  onPress={() => this.props.navigation.navigate(info.name)}
                  icon
                  
                >
                <Left>
                <Icon name={info.icon}/>
    
              </Left>
              <Body>
              <Text>{info.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
          <Footer >
            <Left>
             <Icon style={{ marginLeft: 10 }} name='moon'></Icon>
           </Left>
            <Right>
            <Icon style={{ marginRight: 10 }} name='qr-scanner'></Icon>
            </Right>
          </Footer>
        </Content>
      </Container>
    );
  }
}