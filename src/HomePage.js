import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/');
      console.log(response.data.data); // Log the received data
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("Rendering:", data);

  return (
    <div>
      <h1>Hello, Gemstack community!</h1>
      {data !== null && Array.isArray(data.data) ? (
  <ul>
    {data.data.map((item) => (
      <li key={item.JobID}>
        <h2>{item.job_title}</h2> {/* Render job_title instead of JobTitle */}
        <p>{item.job_description}</p> {/* Render job_description instead of JobDescription */}
      </li>
    ))}
  </ul>
) : (
  <p>Loading...</p>
)}

    </div>
  );
}

export default HomePage;
