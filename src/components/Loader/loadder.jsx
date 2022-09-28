import style from 'components/Loader/loader.module.css'
const Loader = ({ click }) => {
  return (
   
 <button type="button" className={style.btnn} onClick={click}>load more</button>

  )
}
 export default Loader