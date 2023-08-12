import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types'
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import GetPrice from '../GetPrice/GetPrice';
import ProductOption from '../ProductOption/ProductOption';
import OptionSize from '../OptionSize/Option.Size';
import OptionColor from '../OptionColor/OptionColor';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    const actualPrice = props.basePrice;
    const addPrice = props.sizes.find(finalPrice).additionalPrice;
    function finalPrice(size){
      return size.name === currentSize;
    }
    if(addPrice){
      return actualPrice + addPrice;
    }else {
      return actualPrice;
    }
  };

  const addToCart = () => {
      const summary = {
      name: props.name, 
      price: getPrice(),
      size: currentSize,
      color: currentColor,
    }

    return console.log('Summary', summary);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <GetPrice title={props.title} getPrice={getPrice} />
        <form>
          <ProductOption>
            Size: <OptionSize sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
            <Button className={styles.button} addToCart={addToCart}>
              <span className="fa fa-shopping-cart" />
            </Button>
          </ProductOption>
          <ProductOption>
            Color: <OptionColor colors={props.colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
            <Button className={styles.button} addToCart={addToCart}>
              <span className="fa fa-shopping-cart" />
            </Button>
          </ProductOption>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;



