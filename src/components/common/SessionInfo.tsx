import { useContext } from 'react';
import { AuthContext } from '../public/AuthContext';
import styles from '../../styles/common/SessionInfo.module.css';

const SessionInfo: React.FC = () => {
    const { userName } = useContext(AuthContext);
    
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
                <span>{`Hola, ${userName}`}</span>
            </button>
        </div>
    )
}

export default SessionInfo;