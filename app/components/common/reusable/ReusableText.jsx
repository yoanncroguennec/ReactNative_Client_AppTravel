import { Text } from 'react-native'
// STYLES
import { stylesReusableText } from './StylesReusableText';

export default function ReusableText({ align, color, family, size, text }) {
  const { styleText } = stylesReusableText;

  return <Text style={styleText( color, family, size)}>{text}</Text>;
}