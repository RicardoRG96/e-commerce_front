import styles from '../../styles/common/LocationBtn.module.css';

const LocationBtn: React.FC = () => {
    return (
        <div className={styles.container}>
            <button className={styles.btn}>
                <i style={{fontSize: '20px', color: '#EEEEEE'}} className="fa-solid fa-location-dot"></i>
                <span>
                    Ingresa tu dirección
                </span>
            </button>
        </div>
    )
}

export default LocationBtn;