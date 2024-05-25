import React from 'react';
import ImageCard from '../imageCard';
import styles from './index.module.scss';
import CloudTextCard from '../CloudTextCard';
import cn from 'classnames';

const StupidDaily = [
  {
    img: require('../../images/stupid01.png'),
    desc: '呆 滞'
  },
  {
    img: require('../../images/stupid02.jpg'),
    desc: '摆 烂'
  },
  {
    img: require('../../images/stupid03.jpg'),
    desc: '晚 安'
  },
  {
    img: require('../../images/stupid04.jpg'),
    desc: '发 疯'
  },
  {
    img: require('../../images/stupid05.jpg'),
    desc: '可 爱'
  },
  {
    img: require('../../images/stupid06.jpg'),
    desc: '生 气'
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