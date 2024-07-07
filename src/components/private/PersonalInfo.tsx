import styles from '../../styles/private/PersonalInfo.module.css';

const PersonalInfo: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                Datos personales
            </div>
            <div className={styles.formContainer}>
                <form action="submit">
                    <label>Nombre</label>
                    <input type="text" />
                    <label>Correo electrónico</label>
                    <input type="email" />
                    <button>Guadar</button>
                </form>
            </div>
        </section>
    )
}

export default PersonalInfo;