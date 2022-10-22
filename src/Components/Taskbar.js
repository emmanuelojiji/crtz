import "./Taskbar.scss"
import start from "../Media/start.png"

const Taskbar = () => {
    return(
        <div className="taskbar">
            <button class="start-button"><img src={start}></img>start</button>

            <p>19:05</p>
        </div>
    )
}

export default Taskbar;