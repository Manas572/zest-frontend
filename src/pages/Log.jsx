import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAuthStore from '../store';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { user, isLoggedIn, login } = useAuthStore();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
    function handleChange(e)  {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  async function handlelogin(e){
    e.preventDefault();
     setLoading(true); 
      setError('');
    try{
    const res=await axios.post('http://127.0.0.1:8000/auth/login/',{email:formData.email,password:formData.password})
    localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      if (res.data.user) {
        login(res.data.user);
            }
      alert('Welcome to CraveGram!');
       navigate("/home");
    } catch (err) {
      setError(err.response?.data?.error || 'login failed.');
    } finally {
      setLoading(false);
    }
  }
    return (
        <>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>

            <section className='relative bg-black min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-20 gap-12 md:gap-20 overflow-hidden'>
                
                {/*  Cyan Ambient Glow */}
                <div className='fixed top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none size-200 bg-cyan-500/20 rounded-full blur-[160px]'></div>

                {/*  Subtle Orange Accent Glow */}
                <div className='fixed top-[60%] left-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none size-140 bg-orange-500/10 rounded-full blur-[180px]'></div>
                
                {/* Left Side */}
                <div className='text-center md:text-left z-10'>
                    
                    {/* Brand */}
                    <h1 className='text-white font-semibold text-xl tracking-wide'>
                        🍽️ <span className="text-orange-400">Cravegram</span>
                    </h1>

                    {/* Social Proof */}
                    <div className="flex items-center p-1.5 rounded-full border border-white/10 bg-white/5 text-xs w-fit mx-auto md:mx-0 mt-4">
                        <div className="flex items-center">
                            <img className="size-7 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=50" />
                            <img className="size-7 rounded-full border border-white/20 -translate-x-2" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=50" />
                            <img className="size-7 rounded-full border border-white/20 -translate-x-4" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" />
                        </div>
                        <p className="-translate-x-2 text-xs text-slate-300">Join food lovers & creators</p>
                    </div>

                    {/* Heading */}
                    <h2 className='font-semibold text-4xl md:text-6xl/18 bg-gradient-to-r from-white via-cyan-300 to-orange-400 bg-clip-text text-transparent max-w-[500px] mt-6'>
                        Taste. Share. Discover.
                    </h2>

                    {/* Subtext */}
                    <p className='text-base text-slate-400 max-w-[380px] mt-4 mx-auto md:mx-0'>
                        Log in to explore trending dishes, post your cravings, and connect with food creators.
                    </p> 
                </div>
                        
                {/* Right Side Card */}
                <div className='w-full max-w-md z-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl'>
                    
                    <div className="mb-8 text-center md:text-left">
                        <h2 className="text-white text-2xl font-medium">Welcome Back 👋</h2>
                        <p className="text-white/40 text-sm mt-1">
                            New here? <span className="text-orange-400 cursor-pointer hover:underline">Create account</span>
                        </p>
                    </div>

                    {error && (
  <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/30 p-3 rounded-xl">
    {error}
  </div>
)}

                    <form className='space-y-5'
                    onSubmit={handlelogin}
                    >
                        
                        {/* Email */}
                        <div>
                            <label className='block text-white/70 text-sm mb-2 font-light'>Email</label>
                            <input 
                                type="email" 
                                name='email'
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="manaskumar@gmail.com" 
                                className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all'
                            />
                        </div>
            
                        {/* Password */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className='block text-white/70 text-sm font-light'>Password</label>
                            </div>
                            <input 
                                type="password" 
                                name='password'
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••" 
                                className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all'
                            />
                        </div>
            
                        {/* Button */}
                        <div className='pt-2'>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className='w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-black font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-orange-500/10 active:scale-[0.98]'
                            >
                                {loading ? "Logging in..." : "Log In"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}