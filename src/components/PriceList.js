import React from 'react'
import PropTypes from 'prop-types'

const PriceList = ({items, onModifyItem, onDelectItem}) => {
    return (
        <ul className="list-group list-group-flush">
            {
              items &&  items.map((item)=>(
                    <li className="list-group-item d-flex 
                    justify-content-between align-items-center" key={item.id}>
                        <span className="col-1">
                          <span className={`iconfont icon-${item.icon}`}></span>
                        </span>
                        <span className="col-3">{item.name}</span>
                        <span className="col-2">{item.type === 1  ? "+":"-"}{item.amount}元</span>
                        <span className="col-4">{item.totime}</span>
                        <span className="col-1">
                            <a onClick={(event) => {event.preventDefault(); onModifyItem(item)}}>
                              <span className="iconfont icon-bianji"></span>
                            </a>
                        </span>
                        <span className="col-1">
                            <a onClick={(event) => {event.preventDefault(); onDelectItem(item)}}>
                            <span className="iconfont icon-shanchu"></span>
                            </a>
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}

PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem:PropTypes.func.isRequired,
    onDelectItem:PropTypes.func.isRequired
}

export default PriceList