//----------------------------- Currency Conversion --------------------------------------
// **Description: component corresponding to the input and select of the currency exchange
// The amount entered by the user and the type of currency obtained by the API are expected


import PropTypes from "prop-types";
import '../styles/CurrencyConversion.css';

function CurrencyConversion(props) {
  return (
    <div className="container text-center">
      <div className="row">
        
          <div className="col-5">
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input className="form-control" 
                      type="text" value={props.amount} 
                      onChange={ev => props.onAmountChange(ev.target.value)} />
            </div>
          </div>  
          <div className="col-5">
            <select className="form-select" 
                    value={props.currency} 
                    onChange={ev => props.onCurrencyChange(ev.target.value)}>
                    {props.currencies.map((currency => (<option value={currency}>{currency}</option>
              )))}
            </select>
          </div>
          <div className="col-2">
            <img src={props.image} width="70px" className="rounded mx-auto d-block flag"></img>
          </div>

      </div>
    </div>
  );
}

CurrencyConversion.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  image: PropTypes.string.isRequired,
};

export default CurrencyConversion;