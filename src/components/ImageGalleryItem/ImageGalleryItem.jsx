import React, { Component } from 'react';
import style from "components/ImageGalleryItem/imgIt.module.css"
import PropTypes from "prop-types";

 class ImageGalleryItem extends Component {

      clckHendler = () => {
        this.props.onClick(this.props.imgLarge);
    }

    render() {
        const { img , id} = this.props;
        const { clckHendler } = this;
        return (

            <li key={id}
                className={style.ImageGalleryItem}>
                <img className={style.ImageGalleryItem_image} onClick={clckHendler} src={img} alt="" width="300px" />
            </li>

        )
    }
}

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string.isRequired,
  imgLarge: PropTypes.string.isRequired,
}