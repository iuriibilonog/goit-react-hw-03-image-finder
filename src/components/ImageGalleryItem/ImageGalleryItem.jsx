import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onModalshow}) => {


  
  return (
    <>
      {images.map(({id, webformatURL, largeImageURL}) => (<li key={id} className={s.imageGalleryItem}>
      
          <img src={webformatURL} alt="" className={s.imageGalleryItemImage} onClick={() => onModalshow(largeImageURL)}/>
      
    </li>))}
    
  </>
  )
    
    
  
}

export default ImageGalleryItem;