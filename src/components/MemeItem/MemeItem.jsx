import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const memeItem = ({url, alt, id}) => {
    const dispatch = useDispatch ();

    const addMeme = () => {
        dispatch ({
            type: 'ADD_MEME'
        })
    }
}