import React from 'react'
import { StyleSheet, View,FlatList, Text } from 'react-native'
import { SIZES, COLORS } from '../../../styles/base';
import ScreenTitle from '../../components/ScreenTitle'
import { AppContext } from '../../services/contexts/AppContext';
import CharacterCard from '../characters/components/CharacterCard';

const Favorites = () => {
    const {state} = React.useContext(AppContext)

    return (
        <View style={styles.container}>
            <ScreenTitle title={"Favorites"} />
            {state.favoriteList.length > 0 ? renderFavoriteCharacters() : renderEmptyInfo()}
        </View>
    )

    function renderFavoriteCharacters(){
        return(
            <FlatList  
                data={state.favoriteList}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={(el,index)=>{return <CharacterCard  item={el.item} /> }}
            />
        )
    }

    function renderEmptyInfo(){
        return(
            <View style={styles.emptyContainer} >
                <Text style={styles.emptyText} >There are no registered characters in their favorites. You can save by pressing the icon on the top right of the characters.</Text>
            </View>
        )
    }
}

export default Favorites

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:"flex-start"
    },
    emptyContainer:{
        marginHorizontal:SIZES.padding,
        alignItems:'center',
        justifyContent:'center',
        padding:50
    },
    emptyText:{
        fontSize:18,
        color:COLORS.primary,
        textAlign:'center'
    }
})
