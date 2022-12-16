import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import ArcGISMapView from 'react-native-arcgis-mapview'

const App = () => {
  //initial region for testing purpose
  const initialRegion = [{
    latitude: 26.228873,
    longitude: 53.018237
  }]
  // base map URL
  const mapUrl = "https://swivel.maps.arcgis.com/home/item.html?id=210fc4f67878407ca35cb91e7f951cdf"
  // referrence for accessing DOM elements
  const mapView = useRef();

  return (
    <View style={styles.container}>
      <ArcGISMapView
        ref={mapView}
        style={styles.mapStyle}
        initialMapCenter={initialRegion} // TODO: disabled for debugging purpose
        recenterIfGraphicTapped={true}
        rotationEnabled={false}
        mapBasemap={{ type: 'normal' }}
        basemapUrl={mapUrl}
        routeUrl={mapUrl}
      />
    </View>
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
