import React from 'react'
import PropTypes from "prop-types";
const TotalNumber = ({income, outcome}) => (
    <div className="row">
    <div className="total-item col-6">
      <span className="income">收入：¥<span>{income}</span></span>
    </div>
    <div className="total-item col-6">
      <span className="outcome">支出：¥<span>{outcome}</span></span>
    </div>
  </div>
)
TotalNumber.propTypes = {
    income: PropTypes.number.isRequired,
    outcome: PropTypes.number.isRequired,
}

export default TotalNumber