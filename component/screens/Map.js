import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import MapView, { Marker } from "react-native-maps";

const CustomMarker = () => (
  <View
    // style={{
    //   paddingVertical: 10,
    //   paddingHorizontal: 30,
    //   backgroundColor: "#007bff",
    //   borderColor: "#eee",
    //   borderRadius: 5,
    //   elevation: 10
    // }}
  >
    <Image source={require('../../assets/pin.png')}/>
    <Text style={{ color: "#fff" }}>Berlin</Text>
  </View>
);

const App = () => {
  const [region, setRegion] = useState({
    latitude: 15.531583,
    longitude: 13.404954,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker coordinate={{ latitude:15.531583, longitude: 13.404954 }}>
        <CustomMarker />
      </Marker>
    </MapView>
  );
};

export default App;