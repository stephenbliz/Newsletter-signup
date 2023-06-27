import { useState, useRef } from 'react';
import iconList from './assets/icon-list.svg';
import signupDesktop from './assets/illustration-sign-up-desktop.svg';
import signupMobile from './assets/illustration-sign-up-mobile.svg';

const Newsletter = ({handleSubmit}) => {
  const [email, setEmail] = useState('');
  const emailPattern = /^[a-z\d_]+@[a-z]+\.[a-z]{2,5}(\.[a-z]{2,3})?$/;
  const spanRef = useRef();
  

  const validate = (regex, field)=>{
    if(regex.test(field.value)){
        field.className ='valid';
        spanRef.current.classList.add('valid');
        spanRef.current.classList.remove('invalid');
    }else{
      field.className ='invalid';
      spanRef.current.classList.add('invalid');
      spanRef.current.classList.remove('valid');
    }
  }

    return (
        <main className="main">
      <section className="writeup section">
        <h1 className="heading">Stay updated!</h1>
        <p className="para">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="list">
          <div className="points">
            <img src={iconList} alt="icon list" />
            <p>
              Product discovery and building what matters
            </p>
          </div>
          <div className="points">
            <img src={iconList} alt="icon list" />
            <p>
              Measuring to ensure update are a success
            </p>
          </div>
          <div className="points">
            <img src={iconList} alt="icon list" />
            <p>
              And much more
            </p>
          </div>
        </div>
        <form 
          className="form" 
          onSubmit={(e)=>{
            handleSubmit(e);
          }} 
        >
          <label>
            <span className='emailSpan'>Email address</span>
            <span className='invalidSpan' ref={spanRef}>valid email required</span>
          </label>
          <input 
            type="text"
            required 
            name='emailPattern'
            value={email}
            onKeyUp={(e)=>validate(emailPattern, e.target)}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='email@company.com'
          />
          <button className="button" type='submit'>
             Suscribe to monthly newsletter
          </button>
        </form>
      </section>

      <section className="image section">
        <img className='heroImage' src={signupDesktop} alt="Illustration signup desktop" />
      </section>
      <section className="imageMobile section">
        <img className='heroImage' src={signupMobile} alt="Illustration signup mobile" />
      </section>

    </main>
    );
}
 
export default Newsletter;