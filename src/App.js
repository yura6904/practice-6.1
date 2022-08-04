import { useEffect, useState } from 'react';
import './App.css';
import AddTime from './components/AddTime/AddTime';
import ShowTime from './components/ShowTime/ShowTime';

function App() {
  const [name ,setName] = useState('')
  const [zone ,setZone] = useState(0)

  const [localTime, setLocalTime] = useState({
    name: 'Москва',
    zone: 0,
    date: new Date(),
  })

  const [timeArray, setTimeArray] = useState([localTime])

  const refreshArrayElement = (el) => {
    return {
      name: el.name,
      zone: el.zone,
      date: new Date(new Date()-(el.zone*100*60*1000))
    }
  }
  
  const refreshClock = () => {
    setLocalTime({
      name: 'Москва',
      zone: 0,
      date: new Date()
    })
    let temp = timeArray
    for (let i = 0; i < temp.length; i++) {
      temp[i] = refreshArrayElement(temp[i])
    }
    setTimeArray(temp)
  }

  const addTime = (name, zone) => {
    let newArray = timeArray
    let newEl = {
      name: name,
      zone: zone,
      date: new Date(new Date()-(zone*10*60*1000))
    }
    newArray.push(newEl)
    setTimeArray(newArray)
  }

  const deleteClock = (id) => {
    let a1 = timeArray.slice(0, id)
    let a2 = timeArray.slice(id+1, timeArray.length)
    let newArray = a1.concat(a2)
    setTimeArray(newArray)
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    }
  })

  return (
    <div className="App">
      <AddTime addTime={addTime} name={name} zone={zone} setName={setName} setZone={setZone} />
      <ShowTime timeArray={timeArray} deleteClock={deleteClock} />
    </div>
  );
}

export default App;
