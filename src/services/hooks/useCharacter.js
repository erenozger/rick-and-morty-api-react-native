import React from 'react'
import { createAction } from '../utils/createAction';
import axios from '../axios';

export function useCharacter() {

    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch (action.type) {
                case "SET_CHARACTER_LIST":
                    return {
                        ...state,
                        loading: false,
                        characterList: action.payload.results,
                        apiInfo: action.payload.info
                    };
                case "FILTER_CHARACTER_LIST":
                    console.log(action.payload.deviceid)
                    return {
                        ...state,
                        loading: false,
                        characterList: [...action.payload]
                    };
                case "ADD_FAVORITE_LIST":
                    return {
                        ...state,
                        loading: action.payload,
                        favoriteList: [...state.favoriteList, action.payload],
                        favoriteIdList: [...state.favoriteIdList, action.payload.id]
                    };
                case "DELETE_FAVORITE_LIST":
                    return {
                        ...state,
                        loading: action.payload,
                        favoriteList: [...action.payload.favoriteList],
                        favoriteIdList: [...action.payload.favoriteIdList]
                    };
                case "SET_LOADING":
                    return {
                        ...state,
                        loading: action.payload,
                    };
                default:
                    return state;

            }
        },
        { characterList: [], apiInfo: undefined, loading: false, favoriteIdList: [], favoriteList: [] }
    );
    /*--------------------------------------------------------------------*/

    const useCharacterMemo = React.useMemo(
        () => ({
            getCharacters: async (page, status, gender, wholeLine) => {
                axios.get(wholeLine ? wholeLine : `/api/character?page=${page}&status=${status}&gender=${gender}`).catch(
                    console.log("error")
                ).then((response) =>
                    dispatch(createAction("SET_CHARACTER_LIST", response.data))
                )
            },
            findFirstSeenIn: async (item) => {
                return new Promise((resolve, reject) => {
                    try {
                        let splitArr = item?.episode[0].split("/");
                        let firstEpisode_id = splitArr[splitArr.length - 1];
                        axios.get(`/api/episode/${firstEpisode_id}`).then((response) => {
                            resolve(response?.data?.name);
                        }).catch(() => {
                            reject("First seen data not found.");
                        })
                    } catch (err) {
                        reject("First seen data not found.")
                    }
                })
            },
            addOrRemoveFromFavorites: async (item) => {
                if (state.favoriteIdList.includes(item.id)) {
                    let item_id = item.id;

                    let currentFavorites = state.favoriteList.filter(function (el) {
                        return el.id !== item_id
                    })
                    let currentFavoritesIdList = state.favoriteIdList.filter(function (el) {
                        return el !== item_id
                    })

                    let payload = {
                        favoriteList: currentFavorites,
                        favoriteIdList: currentFavoritesIdList,
                    }

                    dispatch(createAction("DELETE_FAVORITE_LIST", payload))
                } else {
                    dispatch(createAction("ADD_FAVORITE_LIST", item))
                }
            },

        }), [state]
    );


    return { useCharacterMemo, state };





}