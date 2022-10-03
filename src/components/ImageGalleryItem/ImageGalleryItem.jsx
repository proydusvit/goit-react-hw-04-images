
import style from "components/ImageGalleryItem/imgIt.module.css"
import PropTypes from "prop-types";

function ImageGalleryItem({ img , id, onClick, imgLarge}) {

     const clckHendler = () => {
        onClick(imgLarge);
    }
 
        return (

            <li key={id}
                className={style.ImageGalleryItem}>
                <img className={style.ImageGalleryItem_image} onClick={clckHendler} src={img} alt="" width="300px" />
            </li>

        )
    
}

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string.isRequired,
  imgLarge: PropTypes.string.isRequired,
}