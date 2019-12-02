import React from 'react'

const Weather = ({ nasa }) => {
  return (
    <div>
      <center><h1>Weather List</h1></center>
      {nasa.map((data) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{data.First_UTC}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{data.Last_UTC}</h6>
            <p class="card-text">{data.Season}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Weather