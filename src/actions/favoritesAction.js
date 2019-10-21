import React from 'react'

export const FAVORITE_SAVE = 'FAVORITE_SAVE'
export const FAVORITE_REMOVE = 'FAVORITE_REMOVE'

const favoriteSave = () => {
    return{
        type: 'FAVORITE_SAVE'
    }
}

const favoriteRemove = () => {
    return{
        type: 'FAVORITE_REMOVE'
    }
}