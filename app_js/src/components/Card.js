import React, { useState } from 'react';
import Loading from './Loading';
import FavoritesWeather from './FavoritesWeather';
import _ from 'lodash';
const Card = ({loadingData, showData, weather, fores}) => {
    
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() +1; //porque empieza desde cero se le suma uno
    var year = today.getFullYear();
    var date = day + ' / ' + month +' / '+year;

    var url = "";
    var urlIcon = "";

    var urlIcon3h = "";
    var urlIcon6h = "";
    var urlIcon9h = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    const [favorite, setFavorite ] = useState([]);

    // inono de carga
    if (loadingData){
        return < Loading/>;
    }

    //vicualizar icono de acuerdo al clima
    if(showData){
        url = "http://openweathermap.org/img/w/";
        urlIcon = url+weather.weather[0].icon+".png";
        urlIcon3h = url+fores.list[1].weather[0].icon+".png";
        //console.log("icon3",fores);
        urlIcon6h = url+fores.list[2].weather[0].icon+".png";
        urlIcon9h = url+fores.list[3].weather[0].icon+".png";

        forecastDate3 = fores.list[1].dt_txt.substring(8, 10) + " / " + fores.list[1].dt_txt.substring(5, 7) + " / " + fores.list[1].dt_txt.substring(0, 4) + " "+ fores.list[1].dt_txt.substring(11, 13);
        forecastDate6 = fores.list[2].dt_txt.substring(8, 10) + " / " + fores.list[2].dt_txt.substring(5, 7) + " / " + fores.list[2].dt_txt.substring(0, 4) + " "+ fores.list[2].dt_txt.substring(11, 13);
        forecastDate9 = fores.list[3].dt_txt.substring(8, 10) + " / " + fores.list[3].dt_txt.substring(5, 7) + " / " + fores.list[3].dt_txt.substring(0, 4) + " "+ fores.list[3].dt_txt.substring(11, 13);

    }

    // funcion favorite
    function addFavorite(){
        let addCard = {weather};
        let addFavory = favorite;
        let data;
        // lo que contiene addfavory, se acumula en la costante favorite
        addFavory = addFavory.concat(addCard);
        console.log("PLIIIS:", addFavory);
        if (favorite.length > 0){     
            addFavory = addFavory.filter(llave => {  
                console.log("AIUDA",llave);   
                if(llave.weather.name === addCard.weather.name){

                    console.log("Llave:",llave.weather.name,addCard.weather.name);
                    return false;
                }else{
                    if(addCard ){
                        
                    }
                    console.log("LlaveElse:",llave.weather.name,addCard.weather.name);
                    return true;
                }
        })    
            setFavorite(addFavory);     
        }else{
            setFavorite(addFavory);
         }
        /*let data;
        addFavory = addFavory.concat(addCard)
        data = addFavory.map((llave) => {
            console.log("info ", llave);
            data = _.uniqBy(llave, 'id');
            console.log("data ", data);
            return data;
        })  

        setFavorite(data);*/
        console.log("favorite:", addCard);
        console.log("FAVORITEE",addFavory)
        

        console.log("setFvorite", addFavory)
        localStorage.setItem("favoriteCitie", JSON.stringify(addFavory))
        console.log("añadir: ",favorite);
    }

  return (
    <div className='mt-5'>
        {
            showData === true ?(
                <div className='constainer'>
                    <div className='card mb-3 mx-auto bg-dark text-light'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <h3 className='card-title'>{weather.name}</h3>
                                <p className='card-date'>{date}</p>
                                <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)} °C</h1>
                                <p className='card-desc'><img src={urlIcon} alt="icon" />{weather.weather[0].description}</p>
                                <img className='img-fluid rounded-start' 
                                src="https://images.pexels.com/photos/7168560/pexels-photo-7168560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                 />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body text-start mt-2'>
                                    <ul>
                                        <li><h5 className='card-text'>Maximum temperature: {(weather.main.temp_max - 273.15).toFixed(1)} °C </h5></li>
                                        <li><h5 className='card-text'>Minimun temperature: {(weather.main.temp_min - 273.15).toFixed(1)} °C </h5></li>  
                                        <li><h5 className='card-text'>Thermal sensation: {(weather.main.feels_like - 273.15).toFixed(1)} °C </h5></li>  
                                        <li><h5 className='card-text'>Humidity: {weather.main.humidity}% </h5></li>  
                                        <li><h5 className='card-text'>Wind speed: {weather.wind.speed}m/s </h5></li>  
                                    </ul>
                                </div><hr />
                                <div className='row mt-4'>
                                    <div className='col text-center'>
                                        <p>{forecastDate3}h</p>
                                        <p className='description'><img src={urlIcon3h}/>{fores.list[1].weather[0].description}</p>
                                        <p className='temp'>{(fores.list[1].main.temp - 273.15).toFixed(1)} °C</p>
                                    </div>
                                    <div className='col text-center'>
                                        <p>{forecastDate6}h</p>
                                        <p className='description'><img src={urlIcon6h}/>{fores.list[2].weather[0].description}</p>
                                        <p className='temp'>{(fores.list[2].main.temp - 273.15).toFixed(1)} °C</p>
                                    </div>
                                    <div className='col text-center'>
                                        <p>{forecastDate9}h</p>
                                        <p className='description'><img src={urlIcon9h}/>{fores.list[3].weather[0].description}</p>
                                        <p className='temp'>{(fores.list[3].main.temp - 273.15).toFixed(1)} °C</p>
                                    </div>

                                </div>
                                <button type="button" className="btn btn-success" onClick={() =>addFavorite()}> Favorite</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {favorite.length > 0 ?(
                        <FavoritesWeather favorite={favorite}></FavoritesWeather>
                    ):(
                        <h1>Sin favoritos</h1>
                    )
                    }
                </div>
            ):(
                <center><h2 className="text-ligth">Not Data</h2></center>
            )
        }
    </div>
  )
}

export default Card;