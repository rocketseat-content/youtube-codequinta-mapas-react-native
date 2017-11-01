import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {
  state = {
    latitude: -27.2106736,
    longitude: -49.6384809,
  };

  componentDidMount() {
    setTimeout(() => {
      this.mapView.animateToCoordinate({
        latitude: -27.2106710,
        longitude: -49.6362700
      }, 500);
    }, 2000);
  }

  render() {
    const { latitude, longitude } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.mapView = map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showBuildings={false}
        >
          <MapView.Marker
            coordinate={{
              latitude: -27.2106736,
              longitude: -49.6384809,
            }}
          />
        </MapView>
        <ScrollView
          style={styles.placesContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            console.log(e.nativeEvent.contentOffset.x);
            console.log(Dimensions.get('window').width);
          }}
        >
          <View style={styles.place}></View>
          <View style={styles.place}></View>
        </ScrollView>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },

  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },
});
