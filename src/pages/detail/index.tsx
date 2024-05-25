import styles from './index.module.scss';
import React, { useContext } from 'react';
import { StupidDaily } from '../../constants';
import { useSearchParams } from 'react-router-dom';

const Detail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { title, img, desc } = StupidDaily[Number(id)] || {};
  const length = StupidDaily.length;
  const gotoNext = () => {
    const nextId =( Number(id) + 1) % length;
    setSearchParams({ id: String(nextId) });
  }
  const gotoPrev = () => {
    const prevId =( Number(id) - 1 + length) % length;
    setSearchParams({ id: String(prevId) });
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.contentContainer}>
        <img src={img} className={styles.img}  />
        <div className={styles.desc}>{desc}</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.btn} onClick={gotoPrev}>上一页</div>
        <div className={styles.btn} onClick={gotoNext}>下一页</div>
      </div>
    </div>
  )
}

export default Detail;