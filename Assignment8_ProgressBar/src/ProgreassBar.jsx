import { useState, useEffect } from "react"
import "./App.css"
const ProgressBar = ({ width, height, duration }) => {
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
                setProgress((prevState) => {
                    return prevState + 1;
                })
            }
        }, duration);

        return () => clearInterval(interval)
    }, [duration, progress])

    return (
        <>
            <div className="container">
                <h2>Progress Bar</h2>
                <div className="progress-bar" style={{ width: width, height: height }}>
                    <div className="progress-div" style={{ width: `${progress}%`, height: height }}>
                    </div>
                    <p id="live-update" style={{ color: `${progress}` <= 52 ? "black" : "White" }} >{`${progress}%`}</p>

                </div>

                <div>
                    {progress < 99 ? <p style={{ fontSize: "20px" }}>Loading...</p> : <p style={{ fontSize: "20px" }}>Completed</p>}
                </div>
            </div>
        </>
    )
}

export default ProgressBar