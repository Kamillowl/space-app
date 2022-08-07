import { useDispatch, useSelector } from "react-redux";
import './MainDoggo.scss'

const MainDoggo = () => {
    const dispatch = useDispatch()
    const {
        hasImg,
        message,
        breed
    } = useSelector((state) => state.myReducer)

    const getPhoto = () => {
        dispatch({ type: 'GET_DOG_PHOTO' })
    }
    return (
        <main className="mainDoggo">
            <h2>This is the doggo page!</h2>
            <article className="dog-section">
                <button className="dog-photo-btn" onClick={getPhoto}>
                    Get{hasImg && message ? ' another' : ''} random dog photo!
                </button>
                { (hasImg && message) &&
                <figure>
                    <img className='dog-img' src={message} alt={`Dog of the day. Breed is: ${breed || 'unknown'}`} />
                    <figcaption>Breed: {breed || 'unknown'}</figcaption>
                </figure>
                }
            </article>
        </main>
    );
}

export default MainDoggo;
