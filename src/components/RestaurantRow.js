import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image
  } from "react-native"

  import Icon from 'react-native-vector-icons/FontAwesome'

  import Stars from 'components/Stars'


  export default class RestaurantRow extends Component {

        state = {
            showInfo: false
        }

        onPressed = () => {
            // this.setState({showInfo: !this.state.showInfo})
            this.props.navigation.navigate('Info', {
                place: this.props.place
            });
        }

      render() {

        const {
            place,
            index
        } = this.props

        return (
        <View key={place.name} style={[{backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F3'} ]}>
            <View style={styles.row}>
                <View style={styles.stars}>
                    <Stars rating={place.rating} />
                </View>

                <View style={styles.nameAddress}>
                    <Text>{place.name}</Text>
                    <Text style={{color: 'gray'}}>{place.address}</Text>
                </View>

                <View style={styles.edges}>
                    <TouchableHighlight 
                        onPress={this.onPressed}
                        style={styles.button}
                        underlayColor="#5398DC"
                    >
                        <Text style={styles.buttonText}>Info</Text>
                    </TouchableHighlight>
                </View>
            </View>    

            {
                this.state.showInfo && 
                <View style={styles.info}>
                    <Text>Restaurant Info</Text>
                    <Image source={{
                        uri: `http://d8oauthrest.kbflourmills.com${place.image}`,
                        flex: 1,
                        height: 100
                    }}
                    // resizeMode="contain"
                    />
                </View>
            }
        </View> 
        )
      }
  }


  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      marginBottom: 10
    },
    edges: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      minWidth: 50
    },
    stars: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: 5,
      minWidth: 50
    },
    nameAddress: {
      flexDirection: 'column',
      flex: 8
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff'
    },
    buttonText: {
        fontSize: 12,
        color: '#0066CC'
    },
    info: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4
    }
  })