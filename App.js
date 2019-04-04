import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList
} from "react-native"
 
import Header from 'components/Header'
import RestaurantRow from 'components/RestaurantRow';

const restaurants = [
  {name: 'Karim Kichen', address: '328, Bashundhara R/A'},
  {name: 'Rashel Irfan', address: '327, Bashundhara R/A'},
  {name: 'Jinnah Kichen', address: '328, Bashundhara R/A'},
  {name: 'Tabib Irfan', address: '327, Bashundhara R/A'},
  {name: 'Firoz Kichen', address: '328, Bashundhara R/A'},
  {name: 'Saimul Irfan', address: '327, Bashundhara R/A'},
  {name: 'Liakot Kichen', address: '328, Bashundhara R/A'},
  {name: 'Babu Irfan', address: '327, Bashundhara R/A'},
  {name: 'Tonmoy Kichen', address: '328, Bashundhara R/A'},
  {name: 'Sondip Irfan', address: '327, Bashundhara R/A'},
  {name: 'Milon Kichen', address: '328, Bashundhara R/A'},
  {name: 'Ibrahim', address: '327, Bashundhara R/A'},
  {name: 'Abdullah Kichen', address: '328, Bashundhara R/A'},
  {name: 'Faruk Irfan', address: '327, Bashundhara R/A'},
  {name: 'Razib Kichen', address: '328, Bashundhara R/A'},
  {name: 'Monir Irfan', address: '327, Bashundhara R/A'},
  {name: 'Khadu Kichen', address: '328, Bashundhara R/A'},
  {name: 'Chayer Adda', address: '328, Bashundhara R/A'}
]

export default class App extends Component {

  state = {
    search: null
  }

  render() {

    // console.log("Search: ", this.state.search)

    return (
      <View style={{
        flex: 1
      }}>
        
        <Header />

        <TextInput 
        style={styles.input} 
        placeholder='Live Search'
        onChangeText={ text => {
          this.setState({ search: text})
        }}
        value={this.state.search}
         />

         <FlatList 
          data={
            restaurants.filter(place => {
              return !this.state.search || 
              place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          }
          renderItem={({item, index}) => 
            <RestaurantRow place={item} index={index} />
          }
          keyExtractor={item => item.name}
          initialNumToRender={10}
         /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5'
  }
})