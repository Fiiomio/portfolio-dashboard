import { useContext } from 'react';
import UserContext from '../UserContext'


export default function Views() {

    const { user, setUser } = useContext(UserContext);

    return (
        <h1>HELLOOOOOO WORLLLDDD</h1>
    )

}