import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import ArcGISMapView from 'react-native-arcgis-mapview'

const App = () => {
  //initial region for testing purpose
  const initialRegion = [{ latitude: 34.055561, longitude: -117.182602 }]
  // base map URL
  const mapUrl = "https://services.gisqatar.org.qa/server/rest/services/Vector/Qatar_StreetMap_Hybrid_E/MapServer?f=jsapi"
  // referrence for accessing DOM elements
  const mapView = useRef();

  return (
    <View style={styles.container}>
      <ArcGISMapView
        ref={mapView}
        style={styles.mapStyle}
        //initialMapCenter={initialRegion} // Disabled the initial region
        recenterIfGraphicTapped={true}
        rotationEnabled={false}
        mapBasemap={{ type: 'normal' }}
        basemapUrl={Platform.OS === 'ios' ? mapUrl : null}
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
