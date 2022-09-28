import  { Component } from "react";
import style from "components/Modal/modal.module.css"

    // const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {

 componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown );
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown )
  }

  handleKeyDown = e => {     
      if (e.code === 'Escape') {
        this.props.onClick();
      }
    }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  }

  render() {
      const { handleBackdropClick } = this;
        return (
            <div className={style.Overlay} onClick={handleBackdropClick}>
  <div className={style.Modal}>
{this.props.children}
  </div>
          </div>
    )

}

}

export default Modal;