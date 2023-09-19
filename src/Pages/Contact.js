import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';


export default function Views() {
    const [contactsData, setContactsData] = useState([]);
    const data = {
        table1H1: "Daily Forms",
        table2H1: "Monthly Forms",
        th2: "Contact Details",
        th3: "Message",
        fetchedData: contactsData,
        td1: "sentOn",
        td2: ["name", "emailAddress", "contactNo"],
        td3: "message"
    }

    let token = localStorage.getItem('token');
  
    useEffect(() => {
      fetchData();
    }, []);
  
    function fetchData() {
      fetch(`${process.env.REACT_APP_API_URL}/visitors/getDailyForms`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
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