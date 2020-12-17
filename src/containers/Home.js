import {useEffect} from "react";
import CreateBtn from '../components/CreateBtn'
import TotalNumber from '../components/TotalNumber'
import PriceList from '../components/PriceList'
import {Tabs, Tab}from "../components/Tabs";
import MonthPicker from "../components/MonthPicker";
import { itemData } from "../dataCenter/picker.js";
import './style.scss'

//node

function Home() {
        return (
            <>
            <div className="container-fluid">
                <div className="header">
                    <div className="month-picker">
                       <MonthPicker year={2020} month={9} onChange={(year,month)=>{console.log(year,month)}}/>
                    </div>
                    <div className="total-number" >
                        <TotalNumber income={20000000} outcome={500000} /> 
                    </div>
                </div>
                <div className="price-search d-flex justify-content-end">
                     <div>
                      
                     </div>
                </div>
                <div className="content">
                    <div className="tab-view d-flex justify-content-between">
                        <div>
                            <Tabs activeIndex={0} onTabChange={()=>{console.log('111')}}>
                                <Tab>收入</Tab>
                                <Tab>支出</Tab>
                            </Tabs>
                        </div>
                        <div>
                          <CreateBtn styleClass='creat-btn' text="新建"  icon="tianjia" onBtnClick={()=>{console.log('btn click')}}/> 
                        </div>
                    </div>
                    <div className="price-list">
                        <PriceList items={itemData} onModifyItem={(item)=>{console.log(item)}} onDelectItem={(item)=>{console.log(item)}}/>
                    </div>
                </div>
            </div>
            </>
        )
}
export default Home