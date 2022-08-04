import propTypes from 'prop-types'

function ShowTime(props) {
    return (
        <div className="ShowTime">
            {props.timeArray.map((t, idx) => (
                <div key={idx}>
                    <p>{t.name}</p>
                    <p>{t.date.getHours() + ':' + t.date.getMinutes() + ':' + t.date.getSeconds()}</p>
                    <button onClick={() => props.deleteClock(idx)}>x</button>
                </div>
            ))}
        </div>
    );
  }

ShowTime.propTypes = {
    timeArray: propTypes.array,
    deleteClock: propTypes.func
}

export default ShowTime;
  