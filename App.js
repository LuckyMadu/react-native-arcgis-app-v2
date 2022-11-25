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

// https://community.esri.com/t5/arcgis-runtime-sdk-for-net-questions/exception-details-dlopen-failed-library-quot/m-p/1199040#M11208
// https://github.com/Esri/arcgis-runtime-samples-android/issues/268
// https://community.esri.com/t5/arcgis-runtime-sdk-for-android-questions/migrating-from-10-2-8-1-to-100-4-0-in-android/m-p/405111#M2751
// https://www.google.com/search?q=Error+inflating+class+com.esri.arcgisruntime.mapping.view.MapView&oq=Error+inflating+class+com.esri.arcgisruntime.mapping.view.MapView&aqs=chrome..69i57j69i61.297j0j9&sourceid=chrome&ie=UTF-8

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
