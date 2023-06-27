import { useState } from 'react';
import Success from './success';
import Newsletter from './newsletter';

function App() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(e.target[0].classList.contains('valid')){
       setSubscribed(!subscribed);
    }
  }

  const handleDismiss = () =>{
    setSubscribed(!subscribed);
  }
  
  return (
    <>
     {!subscribed && <Newsletter handleSubmit={handleSubmit}/>} 
       {subscribed && <Success handleDismiss={handleDismiss}/>}
    </>
  )
}

export default App
