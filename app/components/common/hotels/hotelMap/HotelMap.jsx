import { TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
// STYLES
import { StylesHotelMap } from './StylesHotelMap'

export default function HotelMap({coordinates}) {
    const { maps } = StylesHotelMap
  return (
    <TouchableOpacity>
      <MapView region={coordinates} style={maps}>
        <Marker coordinate={coordinates} title={coordinates.title} />
      </MapView>
    </TouchableOpacity>
  );
}
