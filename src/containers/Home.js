import {useState,useEffect} from "react";
import CreateBtn from '../components/CreateBtn'
import TotalNumber from '../components/TotalNumber'
import PriceList from '../components/PriceList'
import {Tabs, Tab}from "../components/Tabs";
import MonthPicker from "../components/MonthPicker";
import {padZero,tabType,INCOME,OUTCOME,ALL} from "../utils/utility.js";
import { allData, searchData, totalNumber} from "../dataCenter/picker.js";
import './style.scss'

const Home = ()=>{
    //唯一数据源
    const [listData,setListData] = useState(allData)
    const [year, setYear] = useState(2020)
    const [month, setMonth] = useState(12)
    const [inData, setIncome] = useState(0)
    const [outData, setOutcome] = useState(0)
    const [activeTab,setActiveTab] = useState(0)
    const [selectMonthData,setSelectMonthData] = useState([])
   

    const  onTabClick = (e,index) => {
        setActiveTab(index)
        dataDistribution(tabType[index],selectMonthData)
    } 
 
   const onSelctMonth = (year,month) => {
        const monthKey = `${year}-${padZero(month)}`
        const monthListData = searchData('totime',monthKey, allData)
        //存储选择月份数据
        setSelectMonthData(monthListData)

        // 数据分发
        dataDistribution(tabType[activeTab], monthListData)
        
        setYear(year)
        setMonth(month)
   }
   //数据分发器
   const dataDistribution = (type, data) => {
    let outListData,inListData
    switch(type) {
        case OUTCOME:
            outListData = searchData('type',0,data)
            setListData(outListData) 
        break
        case INCOME:
            inListData = searchData('type',1,data)
            setListData(inListData) 
        break
        case ALL:
        default:
            setListData(data)
    }
   }

   useEffect(()=> {
       const outSumData = searchData('type',0, selectMonthData)
       const inSumData = searchData('type',1, selectMonthData)
       const outSum = totalNumber(outSumData)
       const inSum = totalNumber(inSumData)
       setOutcome(outSum)
       setIncome(inSum)
   },[selectMonthData])

    return (
            <>
            <div className="container-fluid">
                <div className="header">
                    <div className="month-picker">
                       <MonthPicker year={year} month={month} onChange={(year,month)=> onSelctMonth(year,month)}/>
                    </div>
                    <div className="total-number" >
                        <TotalNumber income={inData} outcome={outData} /> 
                    </div>
                </div>
                <div className="content">
                    <div className="tab-view d-flex justify-content-between">
                        <div>
                            <Tabs activeIndex={activeTab} onTabChange={(e,index)=> onTabClick(e,index)}>
                                <Tab>统计</Tab>
                                <Tab>收入</Tab>
                                <Tab>支出</Tab>
                            </Tabs>
                        </div>
                        <div>
                          <CreateBtn styleClass='creat-btn' text="新建"  icon="tianjia" onBtnClick={()=>{console.log('btn click')}}/> 
                        </div>
                    </div>
                    <div className="price-list">
                        {tabType[activeTab] === ALL  &&
                          <>
                           <div>数据图表</div>
                           <PriceList items={listData} onModifyItem={(item)=>{console.log(item)}} onDelectItem={(item)=>{console.log(item)}}/>
                          </>
                        }
                        {
                         tabType[activeTab] !== ALL &&
                         <>
                           <PriceList items={listData} onModifyItem={(item)=>{console.log(item)}} onDelectItem={(item)=>{console.log(item)}}/>
                         </> 
                        }
                       
                    </div>
                </div>
            </div>
            </>
        )
}
export default Home