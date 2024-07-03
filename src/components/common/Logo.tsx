import styles from '../../styles/common/Logo.module.css';
import IMAGES from '../../images/images';

const Logo: React.FC = () => {
    return (
        <div className={styles.logoContainer}>
            <button className={styles.btn}>
                <img
                    className={styles.logoImage} 
                    src={IMAGES.logo}
                    alt="logo" 
                />
            </button>
        </div>
    )
}

export default Logo;