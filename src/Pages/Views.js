import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react';


export default function Views() {
  const currentDate = new Date();
  const currentMonth = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
  const [viewsData, setViewsData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const data = {
      table1H1: "Daily Views",
      table2H1: "Monthly Views",
      th2: "No. of Views",
      th3: "IP Address",
      fetchedData: viewsData,
      td1: "visitedOn",
      td2: ["totalViews"],
      td3: "ipaddress",
      fetchedData2: monthlyData
  }

  let token = localStorage.getItem('token');

  useEffect(() => {
    fetchData();
    monthlyViews(selectedMonth);
  }, [selectedMonth]);

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

  function monthlyViews(date) {
    fetch(`${process.env.REACT_APP_API_URL}/views/getMonthlyViews?month=${date}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setMonthlyData(data);
    })
    .catch((error) => console.log(error));
  }


  console.log(monthlyData)

  const handleMonthChange = (event) => {
    const selectedDate = event.target.value;
    console.log(selectedDate);
    setSelectedMonth(selectedDate);
  };

  return (
    <>
      { token === null ? (<Navigate to="/" />)
      :
        (
          <>
            {/* <NavBar /> */}
            <Layout data={data} />
            <select value={selectedMonth} onChange={handleMonthChange}>
              <option value={currentMonth}>Select a month</option>
              <option value="2023-08">August 2023</option>
              <option value="2023-09">September 2023</option>
              <option value="2023-10">October 2023</option>
            </select>
          </>
        )
      }
    </>
  )

}