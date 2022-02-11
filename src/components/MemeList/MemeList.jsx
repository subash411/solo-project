import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

import MemeItem from '../MemeItem/MemeItem';

const MemeList = () => {

    // gain access to search reducer
    const memeResults = useSelector(store => store.getMeme);
    console.log('findIt in search list', memeResults);
    // loop through search reducer


return (
    <>
    <div>
        {memeResults.map((url) => (
            <MemeItem url={url.url} alt ={url.name} id={url.id}/>
        ))}
    </div>
    </>
)
}

export default MemeList;