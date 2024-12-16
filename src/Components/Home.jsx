import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [unit, setUnit] = useState("Celsius");
  const [convertedValue, setConvertedValue] = useState("");
 
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!isNaN(value) && value.trim() !== "") {
      convertTemperature(parseFloat(value), unit);
    } else {
      setConvertedValue(""); // Clear result for invalid input
    }
  };

  const handleUnitChange = (e) => {
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
    if (inputValue !== "" && !isNaN(inputValue)) {
      convertTemperature(parseFloat(inputValue), selectedUnit);
    }
  };


  const convertTemperature = (value, currentUnit) => {
    let result = "";
    if (currentUnit === "Celsius") {
      result = (value * 9) / 5 + 32; // Celsius to Fahrenheit
    } else {
      result = ((value - 32) * 5) / 9; // Fahrenheit to Celsius
    }
    setConvertedValue(result.toFixed(2));
  };
  const handleClear = () => {
    setInputValue("");
    setConvertedValue("");
    setUnit("Celsius");
  };
  return (
    <div>
        
        <div className='my-5 p-5 rounded' style={{height:'400px', width:"400px",backgroundColor:"orange",marginLeft:"500px"}}>
        <MDBInput label="Enter Temperature" id="form1" type="text" value={inputValue}
          onChange={handleInputChange}/>
        <h6 className='text-dark mt-4 ms-1'>Select Unit:</h6>
        <select value={unit} onChange={handleUnitChange}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
        <div className='mt-5'>
        {convertedValue !== "" && (
          <p className='text-dark'>
            Converted Temperature: <strong>{convertedValue}</strong> °{unit === "Celsius" ? "F" : "C"}
          </p>
        )}
      </div>

      <button className='btn btn-dark'style={{marginTop:"80px",marginLeft:'120px'}} onClick={handleClear}>Clear</button>
    </div>
        </div>
  )
}

export default Home