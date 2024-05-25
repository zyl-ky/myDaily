import styles from './index.module.scss';
import React from 'react';
interface IProps {
  img: string;
}
const ImageCard = ({ img }: IProps) => (
  <img className={styles.container} src={img} />
);

export default ImageCard;