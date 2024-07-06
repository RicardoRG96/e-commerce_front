const CartProductDetails: React.FC = () => {
    return (
        <article>
            <div>
                <div>Smartphone Galaxy S23 128GB</div>
                <div>$549.990</div>
            </div>
            <div>
                <div>
                    <img src="" alt="product-image" />
                </div>
                <div>
                    <span>Cantidad</span>
                    <div>
                        <div>
                            <button>-</button>
                        </div>
                        <div>1</div>
                        <div>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-trash"></i>
                    <button>
                        Eliminar
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CartProductDetails;