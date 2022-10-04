import React, { Component } from "react";
import { View, Button, Switch, SafeAreaView, Text, TextInput , StyleSheet, Image, Alert} from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isEnabled: false};
    this.state= {toggleSwitch:false};
  }
   render() {
return (
    <SafeAreaView style={styles.container}>
      <Switch
        style={{alignSelf:"center"}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(toggleSwitch)=>this.setState({toggleSwitch})}
        value={this.state.isEnabled=this.state.toggleSwitch}
      />
      <Text style={{alignSelf:"center"}}>{this.state.isEnabled? "on": "off"}</Text>
      <Image
          style={styles.logotipo}
          source={this.state.isEnabled?
            {uri: 'https://reactnative.dev/img/tiny_logo.png'}:
            {uri: 'https://cdn11.bigcommerce.com/s-80e63/images/stencil/960w/products/169/596/RE001__11099.1386259430.png'}}
        />
    </SafeAreaView>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
  },
  logotipo: {
    width: 50,
    height: 50,
  },
});
export default App; 