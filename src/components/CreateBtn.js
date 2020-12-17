import React from 'react'
import PropTypes from 'prop-types'

const CreateBtn = ({text, styleClass, icon, onBtnClick}) => (
    <button 
    type="button"
    className={`btn ${styleClass}`}
    onClick = {onBtnClick}
    >
    <span className={`iconfont icon-${icon}`}>{text}</span>
    </button>
)

CreateBtn.protoTypes = {
    text: PropTypes.string,
    styleClass:PropTypes.string,
    icon: PropTypes.element.isRequired,
    onBtnClick: PropTypes.func
}
CreateBtn.defaultProps = {
    text:''
}
export default CreateBtn