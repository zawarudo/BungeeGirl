import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Dimensions,
  View,
  ListView,
} from 'react-native'

import ViewContainer from '../components/ViewContainer'
import Colors from '../styles/Colors'
import travelData from '../local_data/questions'
import UserProfile from '../components/UserProfile'
import _ from 'underscore'
import moment from 'moment'

var FBLoginManager = require('NativeModules').FBLoginManager

class HomeScreen extends Component {
  render() {
    var content =
    <View>
      <UserProfile
        {...this.props}
        uidToRender={this.props.uid}
        userDisplayData={this.props.userData} />
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => this._logout()}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
    return content
  }

  _logout() {
    AsyncStorage.clear()
    FBLoginManager.logout(() => {})
    this.props.navigator.resetTo({
      ident: "LoginScreen"
    })
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 17,
    color: Colors.beige,
    fontFamily: "SueEllenFrancisco"
  },
  container: {
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  formInput: {
    fontSize: 32,
    height: 74,
    color: Colors.beige,
    fontFamily: "SueEllenFrancisco"
  },
  formPretext: {
    fontSize: 32,
    marginRight: 8,
    color: Colors.beige,
    fontFamily: "SueEllenFrancisco"
  },
  bioContainer: {
    height: 150,
    fontSize: 18,
    color: Colors.beige,
    fontFamily: "SueEllenFrancisco",
  },
  inputContainer: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  logoutButton: {
    height: 48,
    width: 150,
    marginBottom: 50,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: "SueEllenFrancisco",
    color: 'white',
    fontSize: 21
  },
})

module.exports = HomeScreen
