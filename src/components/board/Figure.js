import bp from '../../image/bp.png';
import bk from '../../image/bk.png';
import bq from '../../image/bq.png';
import br from '../../image/br.png';
import bb from '../../image/bb.png';
import bn from '../../image/bn.png';
import wp from '../../image/wp.png';
import wk from '../../image/wk.png';
import wq from '../../image/wq.png';
import wr from '../../image/wr.png';
import wb from '../../image/wb.png';
import wn from '../../image/wn.png';

const images = {
  bp,
  bk,
  bq,
  br,
  bb,
  bn,
  wp,
  wk,
  wq,
  wr,
  wb,
  wn,
};


function Figure(props) {
  const findCoord = props.positionData.find(item => item.letter === props.itemData.letter && item.number === props.itemData.number)

  const imageSrc = images[props.itemData.id];

  if (!imageSrc) {
    return null;
  }

  const styles = {
    left: findCoord ? `${findCoord.x}%` : '0%',
    top: findCoord ? `${findCoord.y}%` : '0%',
    backgroundImage: `url(${imageSrc})`,
  };

  return (
    <div className="item-figure" style={styles}></div>
  )
}


export default Figure;