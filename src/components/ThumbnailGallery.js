import React from 'react';

const ThumbnailGallery = ({ pictures, onImageClick, selectedImage }) => (
    <div className="thumbnails">
        {pictures.map((pic) => (
            <img
                key={pic.id}
                src={pic.url}
                alt={pic.title}
                onClick={() => onImageClick(pic.url)}
                className={pic.url === selectedImage ? 'selected' : ''}
            />
        ))}
    </div>
);

export default ThumbnailGallery;
