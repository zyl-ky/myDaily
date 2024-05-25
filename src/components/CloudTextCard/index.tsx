import React from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

interface IProps {
  text: string;
}

const CloudTextCard = ({ text }: IProps) => 
  <div className={styles.container}>
    <div className={styles.cloud}>
      <div className={styles.cloudChild} />
      <div className={styles.cloudChild} />
      <div className={styles.cloudChild} />
    </div>
    <div className={cn(styles.cloudSec, styles.cloud)} />
    <div className={styles.text}>{text}</div>
  </div>;

export default CloudTextCard;