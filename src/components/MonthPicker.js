import React,{useState,useRef,useEffect} from 'react'
import PropTypes from 'prop-types'
import { numRange,padZero} from "../utils/utility.js";
import "./MonthPicker.scss";

const MonthPicker = ({year,month,onChange})  => {
    const [selectdYear, setSelectdYear] = useState(year)
    const [selectdMonth, setSelectdMonth] = useState(month)
    const [isOpen, setOpen] = useState(false)
    const [isOpenMonth,setOpenMonth] = useState(false)
    const monthRange = numRange(12,1)
    const yearRange = numRange(10,-3).map(number => number + year)

    let node = useRef(null)

    const toggleDropdown = () => {
      setOpen(!isOpen)
    }

    const selectYear = (yearNumber) => {
        setSelectdYear(yearNumber)
        setOpenMonth(true)
    }

    const selectMonth = (monthNumber) => {
        setSelectdMonth(monthNumber)
        onChange(selectdYear, monthNumber)
        setOpen(false)
        setOpenMonth(false)
    }
    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    }
    
    useEffect(()=>{
        document.addEventListener('click',handleClick,false)
        return () => {
            document.removeEventListener('click',handleClick,false)
        }
    },[])
   return (
       <div className="dropdown" ref={node}>
           <button
           type="button"
           className="btn dropdown-toggle text-white"
           id ="dropdownMenu"
           onClick={(e)=>{e.preventDefault(); toggleDropdown()}}
           >{`${year}年 ${padZero(month)}月`}</button>

           {isOpen &&
           <div className="dropdown-menu picker-menu" aria-labelledby="dropdownMenu" style={{display:'block'}}>
              <div className="d-flex">
                <div className="border-right years-range">
                    { yearRange.map((yearNumber, index) => 
                    <a key={index}
                        role="button"
                        onClick={(e) => {e.preventDefault();selectYear(yearNumber)}} 
                        className={(yearNumber === selectdYear) ? "dropdown-item active text-white" : "dropdown-item"}>
                        {yearNumber} 年
                    </a>  
                    )}
                </div>
                <div className="months-range">
                {monthRange.map((monthNumber, index) => 
                    <a key={index}
                        role="button"
                        onClick={(e) => {e.preventDefault();selectMonth(monthNumber)}}
                        className={(monthNumber === selectdMonth) ? "dropdown-item active text-white": "dropdown-item"}>
                        {padZero(monthNumber)} 月
                    </a>
                    )}
                </div>
               </div>
           </div>
           }
       </div>
   )
}


MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default MonthPicker