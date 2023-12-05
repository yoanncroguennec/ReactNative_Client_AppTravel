import { View } from 'react-native'
// CONSTANTS UTILS
import { COLORS, SIZES } from '../../../utils/constants/styles/theme';
// IMGS
import { animationLoader } from '../../../utils/assets/imgs';

export default function Loader() {
  return (
    <View
      style={{
        backgroundColor: COLORS.lightWhite,
        width: "100%",
        height: SIZES.height,
        justifyContent: "center",
      }}
    >
      <AssetImage
        data={animationLoader}
        mode={"contain"}
        width={"100%"}
        height={"100%"}
      />
    </View>
  );
}