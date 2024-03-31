import React, { useEffect, useState } from 'react';
import { GREEN_BACKGROUND, API_URL, RABBIT_BACKGROUND } from '../../../global-const';
import "../../../common/styles/gallery.css";
import { GalleryWithMusic, shuffle } from "../../../common/components/PhotoMusicGallery.js"
import RadostMojaPhotos from '../../../common/jsons/RadostMojaPhotos.json';



export function RadostMojaPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [photosRadost, setPhotosRadost] = useState([]);
    const musics = [
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146296601' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136815635' },
        { type: "music", src: '' },

    ];
    useEffect(() => {
        if (photosRadost.length === 0) {
            const photos = RadostMojaPhotos.response.items.map(photo => ({
                src: photo.sizes.find(size => size.type === "x").url,
                width: 4, // замените на нужную ширину фотографии
                height: 3, // замените на нужную высоту фотографии
                title: photo.text,
                comments: photo.comments,
                type: "photo"
            }));
            const array3 = photos.concat(musics);
            const shuffledArray = [...array3];
            setPhotosRadost(shuffle(shuffledArray));
        }
    })

    return (
        <div>
            <crt />

            <div className='photo-gallery'>
                <GalleryWithMusic items={photosRadost} className='photo-gallery'></GalleryWithMusic>
            </div>
        </div>
    );
}
