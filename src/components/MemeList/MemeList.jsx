
import MemeItem from '../MemeItem/MemeItem';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import axios from 'axios';
import AddMemeBtn from '../AddMemeBtn/AddMemeBtn'

const MemeList = () => {
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch ({
            type: 'FETCH_MEME'
        })
    }, [])
    // loop through gallery
    const deleteMeme = (id) => {
        console.log('in deleteMeme:', id);
        // send data to server side
        axios.delete(`/meme/${id}`)
          .then((res) => {
            // tell client of success
            console.log('axios DELETE success!');
          })
          .catch((err) => {
            // tell client of failure
            console.log('axios DELETE ERROR!', err);
          });
      }// end deleteMeme function
    return (
        <>
        <AddMemeBtn />
        <div className="memeArea">
            {
              store.memeReducer.map(picture => (
                    <MemeItem key={picture.id}
                     picture={picture} moreLikes={picture.likes}
                     deleteMeme={deleteMeme} 
                     />
                ))
            }
        </div>
        </>
    );
}

export default MemeList;