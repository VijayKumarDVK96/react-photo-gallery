import React, { useState, useCallback } from "react";
import { isMobile } from 'react-device-detect';
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { data } from "../data";

const Container = styled.div`
    margin: 3rem 8rem;
    @media only screen and (max-width: 900px) {
        margin: .5rem;
    }
`;

const StyledCarousel = styled(Carousel)`
    max-width: 100px;
`;

const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container>
        <h1>React Photo Gallery</h1>

        <br />
        
        <Gallery onClick={openLightbox} photos={data} direction={"column"} columns={ isMobile ? 2 : 4 } />
        <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <StyledCarousel
              currentIndex={currentImage}
              views={data.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
            {/* </IKContext> */}
          </Modal>
        ) : null }
      </ModalGateway>
    </Container>
  )
}

export default ImageGallery;