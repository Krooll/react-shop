import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {
    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      };

    return (
        <ul className={styles.choices}>
              {props.colors.map(item => 
                <li key={item}>
                  <button type="button" className={clsx(prepareColorClassName(item), item === props.currentColor && styles.active)} onClick={() => props.setCurrentColor(item)} />
                </li>
              )}
        </ul>
    );
};



export default OptionColor; 