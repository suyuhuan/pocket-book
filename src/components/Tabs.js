import React, { useRef } from 'react'
import PropTypes from 'prop-types'


export const Tabs = ({activeIndex, onTabChange,children}) => {
  const node = useRef(null)
    return (
      <ul className="nav nav-tabs">
          { children && children.map((child,index)=>{
              const activeClassName = (activeIndex === index) ? 'nav-link active' : 'nav-link'
              return (
                <li className="nav-item" key={index} refs={node}>
                   <a
                     className={activeClassName}
                     onClick={(event)=>{onTabChange(event, index)}}
                   >{child}</a>
              </li>
              )
          })
          }
       </ul>
    )

}
Tabs.protoTypes = {
  activeIndex: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
}
export const Tab = ({children}) => <>{children}</>