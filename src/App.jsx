import { useState } from 'react'
import './App.css'
import { format } from 'date-fns';

function App() {
  const [ color, setColor ] = useState('#fff');
  let date = new Date();
  
  function handleColorChange(e) {
    console.log('handleColorChange', e.target.value);
    setColor(e.target.value);
  }
    setInterval(() => {
      setDate(new Date());
    }, 1000) ;

    return (
    <>
      <div>
        <label htmlFor="colorPicker">Color: </label>
        <input type="color" id="colorPicker" onChange={ handleColorChange } />
      </div>
      <hr />
      <p className="clock" style={ {} }>{ format(date, 'MM/dd/yyyy HH:mm:ss:SSS') }</p>
    </>
  )
}

export default App


 
