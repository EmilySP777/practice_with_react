import React, {useState} from 'react'

const Form = ({newLocation}) => {
  const [city, setCity] = useState("");

  const onSubmit =(e)=>{
    e.preventDefault();
    console.log("E:",city);
    if(city === "" || !city) return;
    newLocation(city);
  }

  return (
    <div className="container">
        <div className='row'>
            <form className="row" onSubmit={onSubmit}>
                <div className="col-10">
                    <input type='text' className="form-control" placeholder='city, Ex: Paris' onChange={(e) =>setCity(e.target.value) }></input>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary mb-3" type='submit'>Search</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}
export default Form