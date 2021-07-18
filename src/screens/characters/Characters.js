import React from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import ScreenTitle from '../../components/ScreenTitle';
import { AppContext } from '../../services/contexts/AppContext';
import CharacterCard from './components/CharacterCard';
import { COLORS } from '../../../styles/base';

const Characters = () => {

    const { state, useCharacterMemo } = React.useContext(AppContext);
    const [filterParams, setFilterParams] = React.useState({
        status: "",
        gender: "",
    })
    

    React.useEffect(() => {
        //page - status - gender 
        useCharacterMemo.getCharacters("", filterParams.status, filterParams.gender);
    }, [filterParams])


    const footerComponent = () => <ActivityIndicator size="large" color={COLORS.primary} style={{ marginBottom: 20 }} />

    return (
        <View style={styles.container} >
            <ScreenTitle title={"Character"} />
            {renderCharacters()}
        </View>
    )

    function renderCharacters() {
        return (
            <FlatList
                data={state.characterList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={(el, index) => { return <CharacterCard item={el.item} /> }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={footerComponent}
            />
        )
    }

}

export default Characters;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "flex-start"
    }
})
