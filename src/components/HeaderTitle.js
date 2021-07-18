import React from "react";
import { View, Text, StyleSheet, Image,Platform } from "react-native";
import { imageIcons } from '../../styles/base';

export default function HeaderTitle({titleColor}) {
  const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;

  return (
    <View style={{ height: 50,width:155 }}>
      <Image
        source={imageIcons.logo}
        resizeMode="contain"
        style={{height: 50,width:155,tintColor: titleColor ? titleColor : null}}
      />
    </View>
  );
}