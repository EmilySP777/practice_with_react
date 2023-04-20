import CurrencyConversion from "../components/CurrencyConversion";
import {useState, useEffect} from "react";
import axios from "axios";

const URL_API = 'https://v6.exchangerate-api.com/v6/3eb345dffea7ffca583c727d/latest/USD'; 
function Currency_view() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD'); 
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);
  const [flag, setFlag] = useState();
  const [flag2, setFlag2] = useState();
  // Called API rest currency
  useEffect(() => {
    axios.get(URL_API)
      .then(response => {
        setRates(response.data.conversion_rates);
      })
  }, []);

  
  // Validation at the moment of starting a conversion is already seen
  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
        getFlag(currency1);
        getFlag2(currency2);
      }
      init();
    }
  }, [rates]);


 // Function: Display the converted amount to 2 decimal places
  function format(number) {
    return number.toFixed(2);
  }

// Operation to find the value of currency
  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    getFlag(currency1);
    setCurrency1(currency1);
    
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    getFlag2(currency2);
    setCurrency2(currency2);
  }

  function getFlag(currency1){
    axios.get(`https://restcountries.com/v3.1/currency/${currency1}`)
      .then(response => {
        setFlag(response.data[0].flags.png);
        console.log("FLAG",flag)
      })
  }

  function getFlag2(currency2){
    axios.get(`https://restcountries.com/v3.1/currency/${currency2}`)
      .then(response => {
        setFlag2(response.data[0].flags.png);
        console.log("FLAG2",flag)
      })
  }
 

// Component called and variable assignment
  return (
    <div>
      <div class="card text-center">
        <h1>Currecy Conversion</h1><br />
        <CurrencyConversion
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        image={flag}
        amount={amount1}
        currency={currency1} />
        <div><h3>=</h3></div>
        <CurrencyConversion
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        image={flag2}
        amount={amount2}
        currency={currency2} />
      </div>
      
    </div>
  );
}

export default Currency_view;