import React from 'react'
import useAuthStore from '../store';
import Authgate from '../Components/Authgate';
import NotFound from '../Components/Special';

const Dash = () => {
    const { user, isLoggedIn, login } = useAuthStore();
 if(isLoggedIn){
   if(user?.role=='creator'){
    return <h1> hi hello</h1>
   }else{
    return <NotFound />
   }
  }
  else{
    return <Authgate />
  }
}

export default Dash