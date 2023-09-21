import { Container } from 'react-bootstrap'
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Contacts() {
  const currentDate = new Date();
  const currentMonth = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
  const [contactsData, setContactsData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const data = {
    table1H1: "Daily Forms",
    table2H1: "Monthly Forms",
    th2: "Contact Details",
    th3: "Message",
    fetchedData: contactsData,
    td1: "sentOn",
    td2: ["name", "emailAddress", "contactNo"],
    td3: "message",
    fetchedData2: monthlyData
  }

  let token = localStorage.getItem('token');

  useEffect(() => {
    fetchData();
    monthlyForms(selectedMonth);
  }, [selectedMonth]);

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
      setContactsData(data);
    })
    .catch((error) => console.log(error));
  }

  function monthlyForms(date) {
    fetch(`${process.env.REACT_APP_API_URL}/visitors/getMonthlyForms?month=${date}`, {
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

  const handleMonthChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedMonth(selectedDate);
  };

  return (
    <>
      { token === null ? (<Navigate to="/" />)
      :
      ( 
        <>
          <NavBar />
          <select value={selectedMonth} onChange={handleMonthChange} style={{ position: "absolute", right: 10, top: 10 }}>
            <option value={currentMonth}>Select a month</option>
            <option value="2023-08">August 2023</option>
            <option value="2023-09">September 2023</option>
            <option value="2023-10">October 2023</option>
            <option value="2023-11">November 2023</option>
            <option value="2023-12">December 2023</option>
            <option value="2024-01">January 2024</option>
            <option value="2024-02">February 2024</option>
            <option value="2024-03">March 2024</option>
            <option value="2024-04">April 2024</option>
            <option value="2024-05">May 2024</option>
            <option value="2024-06">June 2024</option>
            <option value="2024-07">July 2024</option>
            <option value="2024-08">August 2024</option>
            <option value="2024-09">September 2024</option>
            <option value="2024-10">October 2024</option>
            <option value="2024-11">November 2024</option>
            <option value="2024-12">December 2024</option>
          </select>
          <Layout data={data} />
        </>
      )
      } 
    </>
  )
}