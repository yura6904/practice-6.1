import propTypes from 'prop-types'

function ShowTime(props) {
    return (
        <div className="ShowTime">
            {props.timeArray.map((t, idx) => (
                <div key={idx}>
                    <p>{t.name}</p>
                    <p>{t.date.getHours() + ':' + t.date.getMinutes() + ':' + t.date.getSeconds()}</p>
                </div>
            ))}
        </div>
    );
  }

ShowTime.propTypes = {
    timeArray: propTypes.array,
}

export default ShowTime;
  