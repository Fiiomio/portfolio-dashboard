import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { useContext } from 'react';
import UserContext from '../UserContext'


export default function Views() {

    const { user, setUser } = useContext(UserContext);
    const data = {
        fetchUrl: "Hello po"
    }

    return (
        <>
            {/* <NavBar /> */}
            <Layout data={data} />
        </>
    )

}