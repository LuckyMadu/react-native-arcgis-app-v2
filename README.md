### Special Note
- Used `react-native-arcgis-mapview` v1.0.11
- There is an opened issue for Android with base map URL (iOS works fine): https://github.com/davidgalindo/react-native-arcgis-mapview/issues/12
- If the app APK does not load the first time, close and reopen it. 

#### Original link has been disabled and I this basemap URL related to qatar city (https://swivel.maps.arcgis.com/home/item.html?id=210fc4f67878407ca35cb91e7f951cdf)
<img src="https://user-images.githubusercontent.com/19740478/208044410-7bf9e1dc-a78b-47a5-ba58-686d37242a3d.png" width=1000 height=500>


### App Screenshots (with updated basemap URL)
<table>
  <tr>
    <td>iOS</td>
    <td>Android</td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/19740478/208043859-cc6a188e-47aa-44d4-afdb-9e270cf9eedb.png" width=400 height=800>
    </td>
    <td> 
      <img src="https://user-images.githubusercontent.com/19740478/208043889-461c7edc-50ff-415d-9a77-f75e4907f91d.png" width=500 height=800>       
     </td>
  </tr>
</table>

### Errors occured in arcgis v100.6
#### You can downgrade the version into v100.4 to fix this issue

<img src="https://user-images.githubusercontent.com/19740478/204038055-866e6e77-ad75-48dc-9b20-8b3939a625fb.png" width=500 height=800>


### Useful Links to solve erros in different versions

- https://community.esri.com/t5/arcgis-runtime-sdk-for-net-questions/exception-details-dlopen-failed-library-quot/m-p/1199040#M11208

- https://github.com/Esri/arcgis-runtime-samples-android/issues/268

- https://community.esri.com/t5/arcgis-runtime-sdk-for-android-questions/migrating-from-10-2-8-1-to-100-4-0-in-android/m-p/405111#M2751

- https://www.google.com/search?q=Error+inflating+class+com.esri.arcgisruntime.mapping.view.MapView&oq=Error+inflating+class+com.esri.arcgisruntime.mapping.view.MapView&aqs=chrome..69i57j69i61.297j0j9&sourceid=chrome&ie=UTF-8
