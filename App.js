import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import ArcGISMapView from 'react-native-arcgis-mapview'

const App = () => {
  const initialRegion = [{ latitude: 34.055561, longitude: -117.182602 }]

  const mapView = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <ArcGISMapView ref={mapView} style={styles.mapStyle}
        initialMapCenter={initialRegion}
        recenterIfGraphicTapped={true}
        rotationEnabled={false}
        mapBasemap={{ type: 'normal' }}
      />
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapStyle: {
    width: '100%',
    height: '100%'
  }

});

export default App;
