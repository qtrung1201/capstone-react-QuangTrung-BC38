import { Modal } from "antd";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import PlayButton from "../PlayButton/PlayButton";
import styles from "./movieCard.module.css";

const Div = styled.div`
  background-color: ${(props) => props.theme.background.color01};
`;

export default function MovieTrailerCard({ movie, width }) {
  const { image, trailer } = movie;

  const iframe = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    iframe.current.src = trailer;
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ width }}>
        <Div className={styles.movieCardImg}>
          <img className="w-full object-contain" src={image} alt="..." />

          <div className={styles.movieCardLayer} onClick={showModal}>
            <PlayButton />
          </div>
        </Div>

        <Modal
          title=""
          visible={isModalOpen}
          onCancel={closeModal}
          footer={null}
          width={"120vh"}
          bodyStyle={{ height: "60vh", padding: "0" }}
        >
          <iframe
            className="w-full h-full"
            title="movie-trailer"
            src={trailer}
            ref={iframe}
          />
        </Modal>
      </div>
    </>
  );
}
