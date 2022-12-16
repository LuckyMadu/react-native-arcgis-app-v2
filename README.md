### Special Note
- Used `react-native-arcgis-mapview` v1.0.11
- There is an opened issue for Android with base map URL (iOS works fine): https://github.com/davidgalindo/react-native-arcgis-mapview/issues/12
- If the app APK does not load the first time, close and reopen it. 

### Original link has been disabled and I created my own basemap URL (https://swivel.maps.arcgis.com/home/item.html?id=210fc4f67878407ca35cb91e7f951cdf)
<img src="https://user-images.githubusercontent.com/19740478/208044006-f3e6dcbf-54e3-416b-b2d2-4f77e70d29ba.png" width=400 height=800>

https://user-images.githubusercontent.com/19740478/208044006-f3e6dcbf-54e3-416b-b2d2-4f77e70d29ba.png
### App Screenshots (Initial Region)
<table>
  <tr>
    <td>iOS</td>
    <td>Android</td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/19740478/204038366-f1b876b7-fa1c-4064-a7e3-a6c10000c8f6.png" width=400 height=800>
    </td>
    <td> 
      <img src="https://user-images.githubusercontent.com/19740478/204037843-59b160d4-2236-43b5-878e-deda6305c5ae.png" width=500 height=800>       
     </td>
  </tr>
</table>

### App Screenshots (with base map URL)
<table>
  <tr>
    <td>iOS</td>
    <td>Android</td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/19740478/204091198-bc375320-8f62-4f81-90dd-5ac0e18bc18e.png" width=400 height=800>
    </td>
    <td> 
      <img src="https://user-images.githubusercontent.com/19740478/204091212-c4ddf1ee-3ece-4231-beb2-9ad32f02d8ef.png" width=500 height=800>       
     </td>
  </tr>
</table>

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
