import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { SIZES, COLORS, imageIcons } from '../../../../styles/base'
import { AppContext } from '../../../services/contexts/AppContext';

const CharacterCard = ({ item }) => {
    const { state, useCharacterMemo } = React.useContext(AppContext);

    React.useEffect(() => {
        console.log(item.item);
    }, [item])
    return (
        <TouchableOpacity style={[styles.cardContainer, { ...styles.shadow }]} >
            {renderCardImage()}
            {renderCardInformation()}
            {renderFavoriteIcon()}
        </TouchableOpacity>
    )

    function renderFavoriteIcon() {
        return (
            <TouchableOpacity style={styles.favIconContainer} onPress={() => useCharacterMemo.addOrRemoveFromFavorites(item)} >
                <Image style={styles.favIconSelf} source={state.favoriteIdList.includes(item?.id) ? imageIcons.favFillIcon : imageIcons.favIcon} />
            </TouchableOpacity>
        )
    }

    function renderCardImage() {
        return (
            <View style={styles.imgContainer} >
                <Image source={{ uri: item?.image }} style={[styles.imgContainer, { flex: 1 }]} resizeMode="cover" />
                <View style={styles.statusContainer} >
                    <View style={[styles.statusCircle, {
                        backgroundColor: item?.status === "unknown" ?
                            COLORS.gray : item?.status === "Alive" ?
                                COLORS.green : COLORS.red
                    }]} />
                    <Text style={styles.characterName} >{item?.name}</Text>
                </View>
            </View>
        )
    }

    function renderCardInformation() {
        return (
            <View style={styles.infoContainer}>
                {infoTitleText("Species", item?.species)}
                {infoTitleText("Location", item?.location?.name)}
                {infoTitleText("Type", item?.type)}
            </View>
        )
    }

    function infoTitleText(title, text) {
        return (
            <View style={styles.infoTextContainer} >
                <Text style={styles.infoTitle} >{title}</Text>
                <Text style={styles.infoText} >{text}</Text>
            </View>
        )
    }

}

export default CharacterCard

const styles = StyleSheet.create({
    cardContainer: {
        width: SIZES.width - 36,
        marginHorizontal: SIZES.padding,
        marginBottom: SIZES.padding,
        borderRadius: 20,
        minHeight: 162,
        backgroundColor: COLORS.cardBackground,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    imgContainer: {
        width: 141,
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    infoContainer: {
        flex: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-around',
        paddingVertical: 5
    },
    statusContainer: {
        width: '100%',
        borderBottomLeftRadius: 20,
        minHeight: 32,
        backgroundColor: "rgba(196, 196, 196, 0.8)",
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        overflow: 'hidden'
    },
    statusCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10
    },
    characterName: {
        fontWeight: '700',
        fontSize: 14,
        color: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 1.5,
    },
    infoTextContainer: {
        width: '100%',
        paddingHorizontal: 16,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: "#929292",
        marginBottom: 4
    },
    infoText: {
        fontWeight: '500',
        fontSize: 13,
        color: COLORS.darkModeBlack
    },
    favIconContainer: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 16,
        top: 16,
    }
})
