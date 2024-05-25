import React from 'react';
import ImageCard from '../imageCard';
import styles from './index.module.scss';
import CloudTextCard from '../CloudTextCard';
import cn from 'classnames';

const StupidDaily = [
  {
    img: require('../../images/stupid01.png'),
    desc: '呆滞……'
  },
  {
    img: require('../../images/stupid01.png'),
    desc: '呆滞……'
  },
  {
    img: require('../../images/stupid01.png'),
    desc: '呆滞……'
  },
  {
    img: require('../../images/stupid01.png'),
    desc: '呆滞……'
  },
  {
    img: require('../../images/stupid01.png'),
    desc: '呆滞……'
  }
]

const Item = StupidDaily.map(
  ({ img, desc }, idx) => 
    <div className={cn(styles.container, { [styles.containerReverse]: idx % 2 ? true : false })} key={idx}>
      <ImageCard img={img} />
      <CloudTextCard text={desc} />
    </div>
  );

const RowItem = () => {
  return (
    <div className={styles.rowItem}>
      {Item}
    </div>
  )
}

export default RowItem;