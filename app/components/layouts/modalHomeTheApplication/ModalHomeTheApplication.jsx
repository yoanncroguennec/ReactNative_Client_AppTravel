import { useState } from "react";
import { View, TouchableOpacity, Modal, Button } from "react-native";
// ICONS
import { Entypo } from "@expo/vector-icons";
// STYLES
import { StylesModalHomeTheApplication } from "./StylesModalHomeTheApplication";
import AnimatedTypingText from "./animatedTypingText/AnimatedTypingText";

export default function ModalHomeTheApplication({ navigation }) {
  // Styles
  const {} = StylesModalHomeTheApplication;

  // USE_STATES
  const [showModal, setShowModal] = useState(true);

  function closeModal(params) {
    navigation.navigate("BottomTabApp_Routes");
    setShowModal(false);
  }
  return (
    <Modal transparent={true} visible={showModal}>
      <View style={{ backgroundColor: "#000000AA", flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFF",
            margin: 50,
            padding: 40,
            borderRadius: 10,
            flex: 1,
          }}
        >
          <TouchableOpacity onPress={closeModal}>
            <Entypo color='#F00' name='cross' size={80} />
          </TouchableOpacity>

          <AnimatedTypingText
            text={[
              `Bonjour.${"\n"}Je vous souhaite la bienvenue dans mon application mobile de Voyage 😃.${"\n"}Bonne visite à vous.`,
            ]}
          />
          <Button onPress={closeModal} title='Démarrez la visite' />
        </View>
      </View>
    </Modal>
  );
}
