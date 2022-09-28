import React, { Component } from 'react';
import style from "components/ImageGalleryItem/imgIt.module.css"

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