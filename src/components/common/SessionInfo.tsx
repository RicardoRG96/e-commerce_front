const SessionInfo: React.FC = () => { //pasarle props para mostrar info del usuario o login/register, posible estado global
    return (
        <div>
            <button>
                <i className="fa-solid fa-user"></i>
                <span>Inicio de sesion / Registro | User name</span>
            </button>
        </div>
    )
}

export default SessionInfo;