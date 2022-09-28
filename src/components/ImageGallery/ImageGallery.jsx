import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import style from "components/ImageGallery/img.module.css"
import PropTypes from "prop-types";

const ImageGallery = ({image, toggleModal}) => {
   return (
       <ul className={style.ImageGallery}>{image.map(({id,webformatURL, largeImageURL }) =>(
           <ImageGalleryItem img={webformatURL} key={id}   onClick={toggleModal}
          imgLarge={largeImageURL} />
      ) )}
        </ul>
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
      toggleModal: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
        webformatURL: PropTypes.string,
        id: PropTypes.number,
        largeImageURL: PropTypes.string
    }))
}
