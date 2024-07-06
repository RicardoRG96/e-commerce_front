import IMAGES from "../../images/images";

const PaymentOptions: React.FC = () => {
    return (
        <article>
            <div>
                <span>Medios de pago disponibles</span>
                <img src={IMAGES.paymentOptions} alt='payment-options' />
            </div>
        </article>
    )
}

export default PaymentOptions;