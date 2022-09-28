import style from 'components/Loader/loader.module.css'
import PropTypes from "prop-types";
const Loader = ({ click }) => {
  return (
   
 <button type="button" className={style.btnn} onClick={click}>load more</button>

  )
}
export default Loader
 
Loader.propTypes = {
  click:PropTypes.func,
}