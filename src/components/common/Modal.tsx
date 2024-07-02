const Modal: React.FC = () => {
    return (
        <section>
            <article>
                <div>
                    <h2>Texto principal</h2>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <form action="submit">
                    <label>
                        email || region
                        <input type="text" />
                    </label>
                    <label>
                        contraseña || comuna
                        <input type="text" />
                    </label>
                    <span>props && "Olvidé mi contraseña"</span>
                    <button>
                        Guardar ubicacion || iniciar sesion 
                    </button>
                </form>
                props && "¿No tienes cuenta? Regístrate"
            </article>
        </section>
    )
}

export default Modal;