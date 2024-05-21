/* eslint-disable react/prop-types */
import { useState } from 'react';
import './SideBar.css';
import DropDownList from './DropDownList';

export default function SideBar({setDayNum, setWeekNum}) {
    let [toggle1, setToggle1] = useState(false);
    let [toggle2, setToggle2] = useState(false);
    let [toggle3, setToggle3] = useState(false);
    let [toggle4, setToggle4] = useState(false);
    let [toggle5, setToggle5] = useState(false);
    let [toggle6, setToggle6] = useState(false);
    let [toggle7, setToggle7] = useState(false);
    let [week, setWeek] = useState(0);

    let arrow1Clicked = ()=> {
        if(toggle1) {
            setToggle1(false);
        }
        else {
            setToggle1(true);
            setWeek(1);
        }
    }
    let arrow2Clicked = ()=> {
        if(toggle2) {
            setToggle2(false);
        }
        else {
            setToggle2(true);
            setWeek(2);
        }
    }
    let arrow3Clicked = ()=> {
        if(toggle3) {
            setToggle3(false);
        }
        else {
            setToggle3(true);
            setWeek(3);
        }
    }
    let arrow4Clicked = ()=> {
        if(toggle4) {
            setToggle4(false);
        }
        else {
            setToggle4(true);
            setWeek(4);
        }
    }
    let arrow5Clicked = ()=> {
        if(toggle5) {
            setToggle5(false);
        }
        else {
            setToggle5(true);
            setWeek(5);
        }
    }
    let arrow6Clicked = ()=> {
        if(toggle6) {
            setToggle6(false);
        }
        else {
            setToggle6(true);
            setWeek(6);
        }
    }
    let arrow7Clicked = ()=> {
        if(toggle7) {
            setToggle7(false);
        }
        else {
            setToggle7(true);
            setWeek(7);
        }
    }

    return(
        <div className="SideBar">
            <div className='DropDown'>
                <h3>Week 1</h3>{!toggle1?<h3><span className="material-symbols-outlined" onClick={arrow1Clicked}>keyboard_arrow_down</span></h3>:<h3><span className="material-symbols-outlined" onClick={arrow1Clicked}>keyboard_arrow_up</span></h3>}
            </div>
            {toggle1?<h5><DropDownList setDayNum={setDayNum} setWeekNum={setWeekNum} week={week}></DropDownList></h5>:null}
            <div className='DropDown'>
                <h3>Week 2</h3>{!toggle2?<h3><span className="material-symbols-outlined" onClick={arrow2Clicked}>keyboard_arrow_down</span></h3>:<h3><span className="material-symbols-outlined" onClick={arrow2Clicked}>keyboard_arrow_up</span></h3>}
            </div>
            {toggle2?<h5><DropDownList setDayNum={setDayNum} setWeekNum={setWeekNum} week={week}></DropDownList></h5>:null}
            <div className='DropDown'>
                <h3>Week 3</h3>{!toggle3?<h3><span className="material-symbols-outlined" onClick={arrow3Clicked}>keyboard_arrow_down</span></h3>:<h3><span className="material-symbols-outlined" onClick={arrow3Clicked}>keyboard_arrow_up</span></h3>}
            </div>
            {toggle3?<h5><DropDownList setDayNum={setDayNum} setWeekNum={setWeekNum} week={week}></DropDownList></h5>:null}
            <div className='DropDown'>
                <h3>Week 4</h3>{!toggle4?<h3><span className="material-symbols-outlined" onClick={arrow4Clicked}>keyboard_arrow_down</span></h3>:<h3><span className="material-symbols-outlined" onClick={arrow4Clicked}>keyboard_arrow_up</span></h3>}
            </div>
            {toggle4?<h5><DropDownList setDayNum={setDayNum} setWeekNum={setWeekNum} week={week}></DropDownList></h5>:null}
            <div className='DropDown'>
                <h3>Week 5</h3>{!toggle5?<h3><span className="material-symbols-outlined" onClick={arrow5Clicked}>keyboard_arrow_down</span></h3>:<h3><span className="material-symbols-outlined" onClick={arrow5Clicked}>keyboard_arrow_up</span></h3>}
            </div>
            {toggle5?<h5><DropDownList setDayNum={setDayNum} setWeekNum={setWeekNum} week={week}></DropDownList></h5>:null}
            <div className='DropDown'>
                <h3>Week 6</h3>{!toggle6?<h3><span className="material-symbols-outlined" onClick={arrow6Clicked}>keyboard_arrow_down</span></h3>:<h3><span className="material-symbols-outlined" onClick={arrow6Clicked}>keyboard_arrow_up</span></h3>}
            </div>
            {toggle6?<h5><DropDownList setDayNum={setDayNum} setWeekNum={setWeekNum} week={week}></DropDownList></h5>:null}
            <div className='DropDown'>
                <h3>Week 7</h3>{!toggle7?<h3><span className="material-symbols-outlined" onClick={arrow7Clicked}>keyboard_arrow_down</span></h3>:<h3><span className="material-symbols-outlined" onClick={arrow7Clicked}>keyboard_arrow_up</span></h3>}
            </div>
            {toggle7?<h5><DropDownList setDayNum={setDayNum} setWeekNum={setWeekNum} week={week}></DropDownList></h5>:null}
        </div>
    )
}