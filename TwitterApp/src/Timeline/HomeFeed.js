import React from 'react';
import Expo from 'expo';
import { StyleSheet } from 'react-native';
import {Content, Item, Body, Card, CardItem, Icon, Title, Text, Button, Left, Right, View, Thumbnail} from 'native-base';

//Tweets on the timeline. Each card= 1 tweet.

export default class Feed extends React.Component {
	render() {
		return(
			<Content>



				<Card>
					<CardItem>
					 <Left>
					 	 <Thumbnail source={require('./thumbnail.jpg')} small/>

					 	 <Body style ={{flexDirection: 'row'}}>
					 	 <View>
					    	<View style={{flexDirection: 'row'}}>
					      	<Text style={styles.NameText}>
					          John Doe
					      	</Text>
					        <Text note> @TwitterID </Text>
					        <Text note> 10m </Text>
					      </View>
					      <Text>
					        Twitter is exempting tweets in Chinese, Korean and Japanese from the new character limit.
					      </Text>
					    </View>

					    <Icon name='arrow-dropdown'/>
					     </Body>
          			</Left>
             	</CardItem>

		        <CardItem style={{justifyContent: 'flex-end'}}>

		               <Button small iconLeft transparent>
		                 <Icon name="ios-undo" />
		                 <Text style={ styles.buttonText }>45</Text>
		               </Button>

		             <Button small iconLeft transparent>
		                <Icon name="md-repeat" />
		                <Text style={ styles.buttonText } >100</Text>
		              </Button>

		               <Button small iconLeft transparent>
		                 <Icon name="heart" />
		                 <Text style={ styles.buttonText }>1k</Text>
		               </Button>

		               <Button default small transparent>
		                 <Icon name="mail" />
		                 </Button>
				</CardItem>
		    </Card>



		    <Card>
					<CardItem>
					 <Left>
					 	 <Thumbnail source={require('./thumbnail.jpg')} small/>

					 	 <Body style ={{flexDirection: 'row'}}>
					 	 <View>
					    	<View style={{flexDirection: 'row'}}>
					      	<Text style={styles.NameText}>
					          John Doe
					      	</Text>
					        <Text note> @TwitterID </Text>
					        <Text note> 10m </Text>
					      </View>
					      <Text>
					        Twitter is exempting tweets in Chinese, Korean and Japanese from the new character limit.
					      </Text>
					    </View>

					    <Icon name='arrow-dropdown'/>
					     </Body>
          			</Left>
             	</CardItem>

		        <CardItem style={{justifyContent: 'flex-end'}}>

		               <Button small iconLeft transparent>
		                 <Icon name="ios-undo" />
		                 <Text style={ styles.buttonText }>45</Text>
		               </Button>

		             <Button small iconLeft transparent>
		                <Icon name="md-repeat" />
		                <Text style={ styles.buttonText } >100</Text>
		              </Button>

		               <Button small iconLeft transparent>
		                 <Icon name="heart" />
		                 <Text style={ styles.buttonText }>1k</Text>
		               </Button>

		               <Button default small transparent>
		                 <Icon name="mail" />
		                 </Button>
				</CardItem>
		    </Card>




		    <Card>
					<CardItem>
					 <Left>
					 	 <Thumbnail source={require('./thumbnail.jpg')} small/>

					 	 <Body style ={{flexDirection: 'row'}}>
					 	 <View>
					    	<View style={{flexDirection: 'row'}}>
					      	<Text style={styles.NameText}>
					          John Doe
					      	</Text>
					        <Text note> @TwitterID </Text>
					        <Text note> 10m </Text>
					      </View>
					      <Text>
					        Twitter is exempting tweets in Chinese, Korean and Japanese from the new character limit.
					      </Text>
					    </View>

					    <Icon name='arrow-dropdown'/>
					     </Body>
          			</Left>
             	</CardItem>

		        <CardItem style={{justifyContent: 'flex-end'}}>

		               <Button small iconLeft transparent>
		                 <Icon name="ios-undo" />
		                 <Text style={ styles.buttonText }>45</Text>
		               </Button>

		             <Button small iconLeft transparent>
		                <Icon name="md-repeat" />
		                <Text style={ styles.buttonText } >100</Text>
		              </Button>

		               <Button small iconLeft transparent>
		                 <Icon name="heart" />
		                 <Text style={ styles.buttonText }>1k</Text>
		               </Button>

		               <Button default small transparent>
		                 <Icon name="mail" />
		                 </Button>
				</CardItem>
		    </Card>




		    <Card>
					<CardItem>
					 <Left>
					 	 <Thumbnail source={require('./thumbnail.jpg')} small/>

					 	 <Body style ={{flexDirection: 'row'}}>
					 	 <View>
					    	<View style={{flexDirection: 'row'}}>
					      	<Text style={styles.NameText}>
					          John Doe
					      	</Text>
					        <Text note> @TwitterID </Text>
					        <Text note> 10m </Text>
					      </View>
					      <Text>
					        Twitter is exempting tweets in Chinese, Korean and Japanese from the new character limit.
					      </Text>
					    </View>

					    <Icon name='arrow-dropdown'/>
					     </Body>
          			</Left>
             	</CardItem>

		        <CardItem style={{justifyContent: 'flex-end'}}>

		               <Button small iconLeft transparent>
		                 <Icon name="ios-undo" />
		                 <Text style={ styles.buttonText }>45</Text>
		               </Button>

		             <Button small iconLeft transparent>
		                <Icon name="md-repeat" />
		                <Text style={ styles.buttonText } >100</Text>
		              </Button>

		               <Button small iconLeft transparent>
		                 <Icon name="heart" />
		                 <Text style={ styles.buttonText }>1k</Text>
		               </Button>

		               <Button default small transparent>
		                 <Icon name="mail" />
		                 </Button>
				</CardItem>
		    </Card>


		   </Content>
		 );
	}
}


 const styles=StyleSheet.create({
   
	 NameText: {
    	fontSize: 15,
    	fontWeight: 'bold',
  		},

  	buttonText: {
            paddingLeft: 5,
            color: '#000'
    	},

     });