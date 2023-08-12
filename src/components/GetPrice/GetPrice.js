import styles from './GetPrice.module.scss';
import PropTypes from 'prop-types'

const GetPrice = props => {
    return (
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.getPrice()}$</span>
        </header>
    );
};

GetPrice.propTypes = {
    getPrice: PropTypes.func.isRequired,
}

export default GetPrice;