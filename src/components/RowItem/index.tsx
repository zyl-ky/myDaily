import React, { useContext } from 'react';
import ImageCard from '../imageCard';
import styles from './index.module.scss';
import CloudTextCard from '../CloudTextCard';
import cn from 'classnames';
import { StupidDaily } from '../../constants';
import { useNavigate } from 'react-router-dom';


const RowItem = () => {
  const navigate = useNavigate();
  const onClickItem = (i: number) => {
    navigate(`/detail?id=${i}`);
  };
  const Items = StupidDaily.map(
    ({ img, title }, idx) => 
      <div
        className={cn(styles.container, { [styles.containerReverse]: idx % 2 ? true : false })}
        key={idx}
        onClick={() => onClickItem(idx)}
      >
        <ImageCard img={img} />
        <CloudTextCard text={title} />
      </div>
    );
  return (
    <div className={styles.rowItem}>
      <div className={styles.title}>
        笨笨列表
      </div>
      <div className={styles.itemContainer}>
        {Items}
      </div>
    </div>
  )
}

export default RowItem;