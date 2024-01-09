import React, { useState, useCallback, useEffect } from "react";
import { Modal, ModalGateway } from "react-images";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import ImageGallery from "react-photo-gallery";

export function MyPhotosPage() {

  // #region LightBox
  const [currentImage2023, setCurrentImage2023] = useState(0);
  const [viewerIsOpen2023, setViewerIsOpen2023] = useState(false);
  const [currentImage2022, setCurrentImage2022] = useState(0);
  const [viewerIsOpen2022, setViewerIsOpen2022] = useState(false);
  const [currentImage2021, setCurrentImage2021] = useState(0);
  const [viewerIsOpen2021, setViewerIsOpen2021] = useState(false);
  const [currentImage2020, setCurrentImage2020] = useState(0);
  const [viewerIsOpen2020, setViewerIsOpen2020] = useState(false);
  const [currentImage2019, setCurrentImage2019] = useState(0);
  const [viewerIsOpen2019, setViewerIsOpen2019] = useState(false);
  const [currentImage2018, setCurrentImage2018] = useState(0);
  const [viewerIsOpen2018, setViewerIsOpen2018] = useState(false);

  const openLightbox2023 = useCallback((event, { photo, index }) => {
    setCurrentImage2023(index);
    setViewerIsOpen2023(true);
  }, []);
  const openLightbox2022 = useCallback((event, { photo, index }) => {
    setCurrentImage2022(index);
    setViewerIsOpen2022(true);
  }, []);
  const openLightbox2021 = useCallback((event, { photo, index }) => {
    setCurrentImage2021(index);
    setViewerIsOpen2021(true);
  }, []);
  const openLightbox2020 = useCallback((event, { photo, index }) => {
    setCurrentImage2020(index);
    setViewerIsOpen2020(true);
  }, []);
  const openLightbox2019 = useCallback((event, { photo, index }) => {
    setCurrentImage2019(index);
    setViewerIsOpen2019(true);
  }, []);
  const openLightbox2018 = useCallback((event, { photo, index }) => {
    setCurrentImage2018(index);
    setViewerIsOpen2018(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage2023(0);
    setCurrentImage2022(0);
    setCurrentImage2021(0);
    setCurrentImage2020(0);
    setCurrentImage2019(0);
    setCurrentImage2018(0);
    setViewerIsOpen2023(false);
    setViewerIsOpen2022(false);
    setViewerIsOpen2021(false);
    setViewerIsOpen2020(false);
    setViewerIsOpen2019(false);
    setViewerIsOpen2018(false);
  };
  // #endregion

  // #region GetPhotos
  const [photosData, setPhotosData] = useState([]);
  const [photos2018, setPhotos2018] = useState([]);
  const [photos2019, setPhotos2019] = useState([]);
  const [photos2020, setPhotos2020] = useState([]);
  const [photos2021, setPhotos2021] = useState([]);
  const [photos2022, setPhotos2022] = useState([]);
  const [photos2023, setPhotos2023] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getMyPhotos') // замените на ваш URL API
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка HTTP: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        const photos = data.response.items.map(photo => ({
          src: photo.sizes.find(size => size.type === "z").url,
          width: 4, // замените на нужную ширину фотографии
          height: 3, // замените на нужную высоту фотографии
          title: photo.text,
          comments: photo.comments,
        }));
        setPhotosData(photos);
        setPhotos2018(photos.filter(x => x.title === '2018'));
        setPhotos2019(photos.filter(x => x.title === '2019'));
        setPhotos2020(photos.filter(x => x.title === '2020'));
        setPhotos2021(photos.filter(x => x.title === '2021'));
        setPhotos2022(photos.filter(x => x.title === '2022'));
        setPhotos2023(photos.filter(x => x.title === '2023'));
      })
      .catch(error => {
        console.error('Ошибка при получении фотографий', error);
      });
  }, []);
  
  // #endregion
 
  document.documentElement.style.removeProperty('--box-header-color');
  document.documentElement.style.removeProperty('--main-background');
  document.documentElement.style.removeProperty('--box-background');

  return (
    <div className='main'>
      <div className='box'>
        <div className='inner'>
          <div className='pupa' id="section2">
            <ImageGallery photos={photos2023} onClick={openLightbox2023} />
            <ImageGallery photos={photos2022} onClick={openLightbox2022} />
            <ModalGateway>
              {viewerIsOpen2023 ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    images={photos2023}
                    index={currentImage2023}
                    style={{ height: 600, width: 600 }}
                    hasMediaButton={false}
                    hasIndexBoard={false}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
            <ModalGateway>
              {viewerIsOpen2022 ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    images={photos2022}
                    index={currentImage2022}
                    style={{ height: 600, width: 600 }}
                    hasMediaButton={false}
                    hasIndexBoard={false}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
        <div className='inner'>
          <div className='pupa' id="section2">
            <ImageGallery photos={photos2021} onClick={openLightbox2023} />
            <ImageGallery photos={photos2020} onClick={openLightbox2023} />
            <ImageGallery photos={photos2019} onClick={openLightbox2023} />
            <ImageGallery photos={photos2018} onClick={openLightbox2023} />
          </div>
        </div>

      </div>
    </div>
  );
}
