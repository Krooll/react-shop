import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    const handleSubmit = e => {
        e.preventDefault();
        props.addToCart();
    }

    return (<button className={clsx(styles.button, props.className)} onClick={handleSubmit}>{props.children}</button>);
};

export default Button;