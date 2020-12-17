const csv = require('csvtojson')
const {CategoriesData, BillData} = require('./datatype')

let priceTypeData = getListData('./categories.csv', CategoriesData)
let priceListData = getListData('./bill.csv', BillData)

function getData(sourse) {
  return csv().fromFile(sourse)
}

function getListData(sourse, Fun){
      let result = getData(sourse).then((json)=>{
        let emap = []
        let e;
        json.map((row)=>{
          e = new Fun();
          Object.assign(e,row);
          emap.push(e)
        })
        return emap;
     })
     return result;
     
}
priceTypeData.then(data => {
  console.log(data)
})
module.exports = {
  priceTypeData,
  priceListData
}