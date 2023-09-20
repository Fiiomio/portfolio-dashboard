import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react';


export default function Views() {
    const [viewsData, setViewsData] = useState([]);
    const data = {
        table1H1: "Daily Views",
        table2H1: "Monthly Views",
        th2: "No. of Views",
        th3: "IP Address",
        fetchedData: viewsData,
        td1: "visitedOn",
        td2: ["totalViews"],
        td3: "ipaddress"
    }

    let token = localStorage.getItem('token');
  
    useEffect(() => {
      fetchData();
    }, []);
  
    function fetchData() {
      fetch(`${process.env.REACT_APP_API_URL}/views/getDailyViews`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setViewsData(data);
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
          { token === null ? (<Navigate to="/" />)
          :
            (
              <>
                {/* <NavBar /> */}
                <Layout data={data} />
              </>
            )
          }
        </>
    )

}