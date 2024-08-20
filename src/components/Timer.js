import React,{useState,useEffect} from 'react';
import './styles/Timer.css';

function Timer({onBreakChange}){
    const [minutes,setMinutes] = useState(25);
    const [seconds,setSeconds] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    const [isBreak,setIsBreak] = useState(false);

    function handleStartButtonClick(){
        setIsRunning(!isRunning);
    }
    function handleBreakButtonClick(){
        setIsBreak(true);
        setMinutes(5);
        setSeconds(0);
    }

    function handleEndBreakClick(){
        setIsBreak(false);
        setMinutes(25);
        setSeconds(0);
    }

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval = setInterval(()=>{
                if(seconds>0){
                    setSeconds(seconds-1);
                }else if(minutes>0){
                    setSeconds(59);
                    setMinutes(minutes-1);
                }else if(!isBreak){
                    setIsBreak(true);
                    setMinutes(5);
                    setSeconds(0);
                }else{
                    setIsBreak(false);
                    setMinutes(25);
                    setSeconds(0);
                }
                onBreakChange(isBreak);
            },1000)
        }
        return ()=> clearInterval(interval);
    },[seconds,minutes,isRunning,isBreak,onBreakChange])

    const formatSecond = (second) => second.toString().padStart(2, '0');

    return(
        <div className={`timer-container ${isBreak ? 'break' : 'default'}`}>
            <h3 className='timer'> {minutes}:{formatSecond(seconds)} </h3>
            <div className='button-container'>
            <button className='button' onClick={handleStartButtonClick}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            {(isRunning &&!isBreak) && <button className='button' onClick={handleBreakButtonClick}>Go To Break</button> }
            {isBreak && <button className='button' onClick={handleEndBreakClick}> End The Break</button>}
            </div>
        </div>
    )

}

export default Timer;