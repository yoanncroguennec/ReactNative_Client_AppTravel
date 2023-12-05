import { useRef, useState } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
// COMMON
import { HeightSpacer, Reusable } from "../../../components/common";
// STYLES
import { StylesLocationMap } from "./StylesLocationMap";

export default function Location() {
  const [count, setCount] = useState(0)

  const [draggableMarkerCoordinates, setdraggableMarkerCoordinates] = useState({
    latitude: 48.51665287478414,
    longitude: -2.7951318584382534,
  });

  // Styles
  const { maps } = StylesLocationMap;

  let locationOfInterest = [
    {
      description: "Yoann Croguennec",
      location: {
        latitude: 48.506089498288425,
        longitude: -2.7667487226426606,
      },
      title: "Yoann Croguennec",
    },
    {
      description: "Pizzeria de Cécile",
      location: {
        latitude: 48.49454454479738,
        longitude: -2.724366467446089,
      },
      title: "Pizzeria de Cécile",
    },
  ];

  function onRegionChange(region) {
    // CHOISIR LOCATION ET RENVOIT COORDONEES
    // console.log("region :", region);
  }

  function showLocationOfInterest() {
    return locationOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  }

  const mapRef = useRef()

 async function takeSnapshotAndShare() {
    const snapshot = await mapRef.current.takeSnapshot({ height: 300, result: "base64", width: 300})
    console.log("snapshot :", snapshot);
    const uri = FileSystem.documentDirectory + "snapshot.png";
    await FileSystem.writeAsStringAsync(uri, snapshot, { encoding: FileSystem.EncodingType.Base64});
    await shareAsync(uri)
  }
  return (
    <TouchableOpacity style={[Reusable.container, {}]}>
      <HeightSpacer height={50} />
      <MapView
        initialRegion={{
          latitude: 48.506089498288425,
          latitudeDelta: 0.0017119866914612203,
          longitude: -2.7667487226426606,
          longitudeDelta: 0.0011168047785758972,
        }}
        onRegionChange={onRegionChange}
        ref={mapRef}
        style={maps}
      >
        {showLocationOfInterest()}
        <Marker
          coordinate={draggableMarkerCoordinates}
          draggable
          onDragEnd={(e) =>
            setdraggableMarkerCoordinates(e.nativeEvent.coordinate)
          }
          pinColor='#0000FF'
          title='PIN DRAGGABLE'
        />
        <Marker
          coordinate={{
            latitude: 48.61665287478414,
            longitude: -2.8951318584382534,
          }}
          pinColor='#00FF00'
        >
          <Callout>
            {/* <Text>{count}</Text>
            <Button
              onPress={() => setCount(count + 1)}
              title='Incrémentez le compteur'
            />
            <Button
              onPress={takeSnapshotAndShare}
              title='Prendre une photo et partager'
            /> */}
          </Callout>
        </Marker>
      </MapView>
    </TouchableOpacity>
  );
}
