// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenominationButton = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-items">
      <button
        type="button"
        className="button"
        onClick={onClickDenominationButton}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
