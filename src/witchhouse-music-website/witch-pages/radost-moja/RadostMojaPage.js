import React, { useEffect,useState } from 'react';
import { GREEN_BACKGROUND, API_URL, RABBIT_BACKGROUND } from '../../../global-const';
import "../../../common/styles/gallery.css";
import {GalleryWithMusic} from "../../../common/components/PhotoMusicGallery.js"



export function RadostMojaPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [photosRadost, setPhotosRadost] = useState([]);
    const musics = [
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146296601' },
        { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136815635'},
        { type: "music", src: '' },

    ];
    useEffect(() => {
        fetch(`${API_URL}/getRadostMojaPhotos`) // замените на ваш URL API
            .then(response => {
                setIsLoaded(true);
                if (!response.ok) {
                    throw new Error('Ошибка HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                setIsLoaded(true);
                const photos = data.response.items.map(photo => ({
                    src: photo.sizes.find(size => size.type === "x").url,
                    width: 4, // замените на нужную ширину фотографии
                    height: 3, // замените на нужную высоту фотографии
                    title: photo.text,
                    comments: photo.comments,
                    type: "photo"
                }));
                Array.prototype.push.apply(photos,musics); 
                setPhotosRadost(photos);
            })
            .catch(error => {
                console.error('Ошибка при получении фотографий', error);
            });
    }, []);




    return (
        <div>
            <crt/>

                                            <div className='photo-gallery'>
                                   <GalleryWithMusic items={photosRadost} className='photo-gallery'></GalleryWithMusic>
                                </div>
        </div>
    );
}
