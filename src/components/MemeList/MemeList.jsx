import MemeItem from '../MemeItem/MemeItem';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import AddMemeBtn from '../AddMemeBtn/AddMemeBtn'
import './MemeList.css'

const MemeList = () => {
    // passing the User Id around
    const params = useParams();
    console.log('Id is', params.id);

    // Getting all the media from the store reducer
    const memeList = useSelector((store) => store.memeReducer);
    console.log('media in memeList', memeList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch ({
            type: 'FETCH_MEME'
        })
    }, [params.id])

    return (
      <>
        <div>
          <AddMemeBtn />
        </div>
        <div className="memeArea">
            {
              memeList.map(meme => (
                    <MemeItem 
                      meme={meme} 
                    />
                ))
            }
          </div>
      </>
    );
}

export default MemeList;
