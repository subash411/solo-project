import MemeList from '../MemeList/MemeList';
import useReduxStore from '../../hooks/useReduxStore';

const Meme = () => {
    const store = useReduxStore();
    return(
        <>
        
            <Title />
            <MemeList />
        </>
    );
}

export default Meme;