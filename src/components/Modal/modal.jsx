
import style from "components/Modal/modal.module.css"
import { useEffect } from "react";
    const modalRoot = document.querySelector('#modal-root');
function Modal({ onClick, path }) {


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
 
    
    return () => { window.removeEventListener('keydown', handleKeyDown) };

  })

 const handleKeyDown = e => {     
      if (e.code === 'Escape') {
        onClick();
      }
    }

 const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  }

 
   
        return (
            <div className={style.Overlay} onClick={handleBackdropClick}>
  <div className={style.Modal}>
<img src={path} alt="Big img" />
  </div>
          </div>
    )

}

export default Modal;