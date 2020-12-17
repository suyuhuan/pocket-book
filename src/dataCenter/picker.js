import { testItems, testCategories,testIcon} from './testData'
import { ID, toTime} from "../utils/utility";

//组合数据
const itemData = testItems.map(item => {
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

//计算钱的总和
// const totalAmount = (type, data) => {
//     let money;
//     data.reduce((total,num)=>{
        
//         return total + num
//     },type)
    
//     return money
// }
//计算支出

export {
    itemData
}