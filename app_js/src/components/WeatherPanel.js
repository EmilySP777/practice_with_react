import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';
const WeatherPanel = () => {
  
  let urlWeather ="https://api.openweathermap.org/data/2.5/weather?appid=ba0b9122e6b73072e6d21d20ef05c086";
  let cityUrl = "&q=";
  let urlFores = "https://api.openweathermap.org/data/2.5/forecast?appid=ba0b9122e6b73072e6d21d20ef05c086";
    const [weather, setWeather] = useState([]);
    const [fores, setFores] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState([]);

    const getLocation = async(loc) =>{
        setLoading(true);
        setLocation(loc);

        //weather

        urlWeather = urlWeather+cityUrl+loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok)throw{response}
            return response.json();
        }).then((weatherData)=>{
            console.log("weatherData: ",weatherData)
            setWeather(weatherData);
            setShow(true);
        } ).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    //Fores
        urlFores = urlFores+cityUrl+loc;

        await fetch(urlFores).then((response) =>{
            if(!response.ok){
                throw{response}  
            }
            return response.json();
        }).then((foresData)=>{
            console.log("foresData: ",foresData)
            setFores(foresData);

            setLoading(false);
            setShow(true);

        } ).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }
    
    

      

  return (
    <React.Fragment>
        <Form  newLocation={getLocation}/>
        <Card showData = {show} weather = {weather} fores ={fores} loadingData={loading}/>
    </React.Fragment>
  )
}

export default WeatherPanel