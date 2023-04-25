import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-des">{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather-icon" />
            </div>
            <div className="bottom">
                <p className="temparature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="head">รายละเอียด</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">รู้สึกเหมือน</span>
                        <span className="parameter-label">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">แรงลม</span>
                        <span className="parameter-label">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">ความชิ้น</span>
                        <span className="parameter-label">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">แรงดัน</span>
                        <span className="parameter-label">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;