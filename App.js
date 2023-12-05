import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// ANIMATIONS (LOTTIES)
import { AnimationIntro_Lottie } from "./app/animations";
// LAYOUTS
// import { ScrollBottomSheet } from "./app/layouts";
// ROUTES
// import DrawerAppRoutes from "./app/routes/drawer/DrawerApp.Routes";
import StacksAppRoutes from "./app/routes/StacksApp.Routes";


export default function App() {
  // FOR EFFECT AUPLAY AND LOOP OF "FILE JSON Lottie"
  const lottieRef = useRef(null);

  // Automatic page change using setTimout
  const [automaticPageChange, setAutomaticPageChange] = useState(false);
  const delayPageChange = 5;

  useEffect(() => {
    // FOR EFFECT AUPLAY AND LOOP OF "FILE JSON Lottie"
    if (lottieRef.current) {
      setTimeout(() => {
        lottieRef.current?.reset();
        lottieRef.current?.play();
      }, 100);
    }

    // Automatic page change using setTimout
    let timerDelayPageChange = setTimeout(
      () => setAutomaticPageChange(true),
      delayPageChange * 1000
    );
    return () => {
      clearTimeout(timerDelayPageChange);
    };

  }, [lottieRef.current]);

  // Return
  return !automaticPageChange ? (
    <AnimationIntro_Lottie lottieRef={lottieRef} />
  ) : (
    <NavigationContainer>
      <StacksAppRoutes />
      {/* <DrawerAppRoutes /> */}
     
    </NavigationContainer>
  );
}
