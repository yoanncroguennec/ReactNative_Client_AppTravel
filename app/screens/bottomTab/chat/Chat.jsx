import { View, Text } from 'react-native'
// COMMON
import { HeightSpacer, Reusable } from '../../../components/common';

export default function Chat() {
  return (
    <View style={[Reusable.container, {}]}>
      <HeightSpacer height={50} />
      <Text>
        ChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChat Chat
        ChatChat Chat Chat ChatChat
      </Text>
    </View>
  );
}