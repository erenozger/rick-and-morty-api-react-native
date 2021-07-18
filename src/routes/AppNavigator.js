import React from 'react';
import Characters from '../screens/characters/Characters';
import CharactersDetail from '../screens/characters/CharactersDetail';
import Favorites from '../screens/favorites/Favorites';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from '../components/HeaderTitle';


const Stack = createStackNavigator();

const screenOptionStyle = {
    //headerShown: false,
    headerTitle: (props) => <HeaderTitle />,
};

const CharacterStackNavigator = ({ params }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Characters" component={Characters} options={screenOptionStyle} />
            <Stack.Screen name="CharactersDetail" component={CharactersDetail} options={screenOptionStyle} />
        </Stack.Navigator>
    );
};

const FavoritesStackNavigator = ({ params }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Favorites" component={Favorites} options={screenOptionStyle} />
        </Stack.Navigator>
    );
};

export { CharacterStackNavigator, FavoritesStackNavigator };