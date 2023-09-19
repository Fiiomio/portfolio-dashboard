import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext'


export default function Views() {

    const { user, setUser } = useContext(UserContext);
    const [contactsData, setContactsData] = useState([]);
    const data = {
        fetchUrl: "Hello po",
        th2: "Contact Details",
        th3: "Message",
        fetchedData: contactsData,
        td1: "{fetchedData.sentOn}",
        td2: ["{fetchedData.name}", "{fetchedData.emailAddress}", "{fetchedData.contactNo}"],
        td3: "{fetchedData.message}"
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    function fetchData() {
      fetch(`${process.env.REACT_APP_API_URL}/visitors/getDailyForms`)
        .then((res) => res.json())
        .then((data) => {
          setContactsData(data);
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
            {/* <NavBar /> */}
            <Layout data={data} />
        </>
    )

}