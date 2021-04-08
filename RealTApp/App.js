import * as React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.firstView}>
          <View style={styles.lineFont}>
            <Text style={styles.headline}>Login</Text>
          </View>
        </View>
        <View style={styles.tvscreenTop} />
        <View>
          <Text>{deviceHeight}</Text>
          <Text>{deviceWidth}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstView: {
    backgroundColor: '#EBC600',
    width: '100%',
    height: '60%',
  },

  tvscreenTop: {
    width: 10,
    height: 18,
    backgroundColor: 'white',
    position: 'absolute',
    top: '100%',
    left: '50%',
    borderRadius: 5,
    transform: [{scaleX: 60}, {scaleY: 40.5}],
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
    width: '50%',
  },
  lineFont: {marginTop: '25%', justifyContent: 'center', alignItems: 'center'},
});
