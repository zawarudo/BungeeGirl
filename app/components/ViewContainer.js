'use strict';

var React = require("react-native")
var { View } = React

var ViewContainer = React.createClass({

  componentDidMount: function() {
  },

  render: function() {
    if(this.props.statusBarOptions) {
      React.StatusBar.setHidden(true, 'none')
    } else {
      React.StatusBar.setHidden(false, 'slide')
    }

    return (
      <View
        ref="Container"
        style={styles.container}>
        <View style={{
          height: (this.props.hidden ? 0 : 20),
          backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white'}} />
        {this.props.children}
      </View>
    )
  },

  componentWillUnmount: function() {
  },

})

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  }
})

module.exports = ViewContainer
