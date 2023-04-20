import React from 'react';
import PropTypes from "prop-types";

function FavoritesWeather(props){
    console.log("PROPSSS",props.favorite);
  return (
    props.favorite.map((item) => {
     return <div className='constainer'>
                    <div className='card mb-3 mx-auto bg-dark text-light'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <h3 className='card-title'>{item.weather.name}</h3>
                                <p className='card-date'>fecha</p>
                                <h1 className='card-temp'>{(item.weather.main.temp - 273.15).toFixed(1)} °C</h1>
                                <p className='card-desc'><img src="alt=" />{item.weather.weather[0].description}</p>
                                <img className='img-fluid rounded-start' 
                                src="https://images.pexels.com/photos/7168560/pexels-photo-7168560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                 />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body text-start mt-2'>
                                    <ul>
                                        <li><h5 className='card-text'>Maximum temperature: {(item.weather.main.temp_max - 273.15).toFixed(1)} °C </h5></li>
                                        <li><h5 className='card-text'>Minimun temperature: {(item.weather.main.temp_min - 273.15).toFixed(1)} °C </h5></li>  
                                        <li><h5 className='card-text'>Thermal sensation: {(item.weather.main.feels_like - 273.15).toFixed(1)} °C </h5></li>  
                                        <li><h5 className='card-text'>Humidity: {item.weather.main.humidity}% </h5></li>  
                                        <li><h5 className='card-text'>Wind speed: {item.weather.wind.speed}m/s </h5></li>  
                                    </ul>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>})
  )
}

export default FavoritesWeather