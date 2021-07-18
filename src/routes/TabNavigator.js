import React from "react";
import { COLORS, imageIcons } from '../../styles/base';
import { CharacterStackNavigator, FavoritesStackNavigator } from "./AppNavigator";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            tabBarOptions={{
                activeTintColor: COLORS.primary,
                labelStyle: { fontWeight: "600" },
                style: {
                    // position: "absolute",
                    // bottom: 25,
                    // left: 20,
                    // right: 20,
                    // elevation: 0,
                    // // width:SIZES.width*.9,
                    // // alignSelf:'center',
                    // backgroundColor: "#ffffff",
                    // borderRadius: 15,
                    // height: 70,
                    // ...styles.shadow,
                    // paddingVertical: 5,
                    // alignItems: 'center', justifyContent: 'center'
                }
            }}
        >
            <Tab.Screen
                name="Characters"
                component={CharacterStackNavigator}
                options={({ route }) => ({
                    tabBarBadgeStyle: { color: COLORS.red },
                    tabBarLabel: "Characters",
                    tabBarIcon: ({ focused, color, size }) => (
                        // <FontAwesome5Icon
                        //     name="home"
                        //     size={size}
                        //     color={focused ? COLORS.primary : COLORS.gray}
                        // />
                        <View style={{ height: size, width: size, alignItems: 'center', justifyContent: 'center', }} >
                            <Image style={{ height: size, width: size,tintColor:focused ? COLORS.primary : color  }} source={imageIcons.charactersIcon} />
                        </View>
                    ),
                })}
            ></Tab.Screen>

            <Tab.Screen
                name="Favorites"
                component={FavoritesStackNavigator}
                options={{
                    tabBarLabel: "Favorites",
                    tabBarIcon: ({ focused, color, size }) => (
                        // <MaterialCommunityIcons
                        //     name="note-multiple-outline"
                        //     size={size}
                        //     color={focused ? COLORS.primary : COLORS.gray}
                        // />
                        <View style={{ height: size + 10, width: size + 10, alignItems: 'center', justifyContent: 'center', }} >
                            <Image style={{ height: size, width: size }} resizeMode="contain" source={focused ? imageIcons.favFillIcon :  imageIcons.favIcon} />
                        </View>
                    ),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}
export default TabNavigator;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.33,
        shadowRadius: 3.84,
        // elevation: 3,
    },

});