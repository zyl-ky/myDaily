import React from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

interface IProps {
  text: string;
}

const CloudTextCard = ({ text }: IProps) => 
  <div className={styles.container}>
    {
      text.split('').map((item, idx) => <div className={styles.cloudChild} key={idx}>{item}</div>)
    }
  </div>

export default CloudTextCard;