import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {
    return (
        <ul className={styles.choices}>
            {props.sizes.map(size => 
            <li key={size.name}>
                <button type="button" className={clsx(props.currentSize === size.name && styles.active)} onClick={() => props.setCurrentSize(size.name)}> {size.name} </button>
            </li>
            )}
        </ul>
    );
}; 

OptionSize.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize;