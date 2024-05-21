import { useState } from 'react'
import './MainBody.css'
import SideBar from './SideBar'

export default function MainBody() {

    let [dayNum, setDayNum] = useState(0);
    let [weekNum, setWeekNum] = useState(0);

    return(
        <div className="MainBody">
            <div className='Lecture'>
                <video height="280vw" controls>
                <source src="E:\backend+react\ReactDir\kdag-task\react-coursepage\src\assets\SampleVideoLecture.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
                <div className='LectureDescription'><h3>Video Description: This is the description of week {weekNum} and day {dayNum}</h3></div>
            </div>
            <div className='SideNav'>
                <SideBar setDayNum={setDayNum} setWeekNum={setWeekNum}></SideBar>
            </div>
        </div>
    )
}