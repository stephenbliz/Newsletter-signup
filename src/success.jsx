import successIcon from './assets/icon-success.svg'

const Success = ({handleDismiss}) => {
    
    return (
        <section className="success">
            <div className="success-icon-wrapper">
                <img src={successIcon} alt="" className="success-icon" />
            </div>
            <h1 className="heading heading2">Thanks for subscribing!</h1>
            <p className="para para2">
                A confirmation email has been sent to <span>ash@loremcompany.com</span>.
                Please open it and click the button inside to confirm your suscription
            </p>
            <button className="button buttonMobile" onClick={()=>handleDismiss()}>
                Dismiss message
            </button>
        </section>
    );
}
 
export default Success;