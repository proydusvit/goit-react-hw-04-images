import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import style from "components/ImageGallery/img.module.css"
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
