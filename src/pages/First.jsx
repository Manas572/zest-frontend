import React from 'react'
import Hero from '../Components/Hero'
import Gallery from '../Components/Gallery'
import useAuthStore from '../store';
import Authgate from '../Components/Authgate';

const First = () => {
  const { user, isLoggedIn, login } = useAuthStore();
  if(isLoggedIn){
    return (
    <>
    <div>
        <Hero />
    </div>
    <div>
      <Gallery />
    </div>
    </>
  )
  }
  else{
    return <Authgate />
  }
}

export default First