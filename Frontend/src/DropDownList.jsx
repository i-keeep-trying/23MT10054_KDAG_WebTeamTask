/* eslint-disable react/prop-types */
import './DropDownList.css'

export default function DropDownList ({setDayNum,setWeekNum,week}) {
    
    let clickOnDay1 = () => {
        setDayNum(1);
        setWeekNum(week);
    }

    let clickOnDay2 = () => {
        setDayNum(2);
        setWeekNum(week);
    }

    let clickOnDay3 = () => {
        setDayNum(3);
        setWeekNum(week);
    }

    let clickOnDay4 = () => {
        setDayNum(4);
        setWeekNum(week);
    }

    let clickOnDay5 = () => {
        setDayNum(5);
        setWeekNum(week);
    }

    let clickOnDay6 = () => {
        setDayNum(6);
        setWeekNum(week);
    }

    let clickOnDay7 = () => {
        setDayNum(7);
        setWeekNum(week);
    }
    
    return(
        <div className="DropDownList">
            <h5 onClick={clickOnDay1}>Day 1</h5>
            <h5 onClick={clickOnDay2}>Day 2</h5>
            <h5 onClick={clickOnDay3}>Day 3</h5>
            <h5 onClick={clickOnDay4}>Day 4</h5>
            <h5 onClick={clickOnDay5}>Day 5</h5>
            <h5 onClick={clickOnDay6}>Day 6</h5>
            <h5 onClick={clickOnDay7}>Day 7</h5>
        </div>
    )
}