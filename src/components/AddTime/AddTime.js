import propTypes from 'prop-types'

function AddTime(props) {
  return (
    <div className="AddTime">
        <p>Название</p>
        <input onChange={evt => props.setName(evt.target.value)}></input>
        <p>Временная зона</p>
        <input onChange={evt => props.setZone(evt.target.value-0)} type='number' step={0.1}></input>
        <button onClick={() => {props.addTime(props.name, props.zone)}}>Добавить</button>
    </div>
  );
}


AddTime.propTypes = {
  setName: propTypes.func,
  setZone: propTypes.func,
  addTime: propTypes.func,
  name: propTypes.string,
  zone: propTypes.number,
}

export default AddTime;
