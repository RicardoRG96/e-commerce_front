import styles from '../../styles/common/HamburgerBtn.module.css'

const HambugerBtn: React.FC = () => {
    return (
        <div className={styles.container}>
            <button className={styles.btn}>
                <i 
                    id={styles.i}
                    style={
                        {
                            fontSize: '30px', 
                            color: '#EEEEEE'
                        }
                    } 
                    className="fa-solid fa-bars">
                </i>
                <span>Categorías</span>
            </button>
        </div>
    )
}

export default HambugerBtn;