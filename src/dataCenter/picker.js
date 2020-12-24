import { testItems, testCategories,testIcon} from './testData'
import { ID, toTime} from "../utils/utility";


const allData = testItems.map(item => {
    item.amount = Math.abs(item.amount);
    let toDate = toTime(item.time * 1)
    let name = testCategories.filter(fil => fil.id.includes(item.category))[0]['name']
    let icon = testIcon.filter(ico => ico.id.includes(item.category))[0]['icon']
    item = {
        ...item,
        id: ID(),
        totime: toDate,
        name,
        icon
    }
    return item
})

const searchData = (searchType,searchKeyword,searchData) => {
    let resultContent = searchData.filter((item) =>(typeof item[searchType] !== 'number') ? 
    item[searchType].includes(searchKeyword):
    String(item[searchType]).includes(searchKeyword))
    return resultContent;
}

const totalNumber = (data) => {
    return data.length ? data.map(item => item.amount).reduce((total,item)=> total + item) : 0
}

export {
    allData,
    searchData,
    totalNumber
}