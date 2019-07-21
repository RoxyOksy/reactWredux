import React from 'react';
import './imagePreview.css';

const ImagePreview = ({src, vis, onDelete}) => {

  let visibility = vis ? 'isVisible' : 'notVisible';

  return (
    <div className={visibility}>
      <img src={src} alt="my_pic"/>
      <button className='delete' onClick={onDelete}> X </button>
    </div>

   );
};

export default ImagePreview;
