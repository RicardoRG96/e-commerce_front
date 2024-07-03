import styles from '../../styles/common/SessionInfo.module.css';

const SessionInfo: React.FC = () => { //pasarle props para mostrar info del usuario o login/register, posible estado global
    return (
        <div className={styles.container}>
            <button className={styles.btn}>
                <i  
                    style={
                        {
                            fontSize: '25px', 
                            color: '#EEEEEE'
                        }
                    } 
                    className="fa-solid fa-user">
                </i>
                <span>Inicia sesion o registrate</span>
            </button>
        </div>
    )
}

export default SessionInfo;