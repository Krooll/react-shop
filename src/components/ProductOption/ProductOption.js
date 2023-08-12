import styles from './ProductOption.module.scss';

const ProductOption = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>{props.children}</h3>
        </div>
    );
};

export default ProductOption; 