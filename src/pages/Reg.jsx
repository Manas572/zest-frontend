import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ChefHat } from 'lucide-react';
import useAuthStore from '../store';
import { useNavigate } from "react-router-dom";

const Reg = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user, isLoggedIn, login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    username: '',
    password: '',
    role: 'user',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };


  async function handleRequestOTP(e){
    e.preventDefault();
    setLoading(true);
    setError('');
    try{
      const res=await axios.post('http://127.0.0.1:8000/auth/request-otp/',{ email: formData.email });
      alert(res.data.message)
      setStep(2);
    }catch(err){
      setError(err.response?.data?.error || 'Server error.');
    }finally{
      setLoading(false)
    }
  }

  async function handleRegister(e)  {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://127.0.0.1:8000/auth/register/', formData);
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      if (res.data.user) {
      login(res.data.user);
      }
      alert('Welcome to CraveGram!');
       navigate("/home");
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
        * { font-family: "Poppins", sans-serif; }
      `}</style>

      <section className='relative bg-black min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-20 gap-12 md:gap-20 overflow-hidden'>
        
        {/* 🔵 Cyan Glow */}
        <div className='fixed top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none size-200 bg-cyan-500/20 rounded-full blur-[160px]'></div>

        {/* 🟠 Subtle Orange Glow */}
        <div className='fixed top-[60%] left-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none size-140 bg-orange-500/10 rounded-full blur-[180px]'></div>
        
        {/* LEFT */}
        <div className='text-center md:text-left z-10'>
          
          <h1 className='text-white font-semibold text-xl tracking-wide'>
            🍽️ <span className="text-orange-400">Cravegram</span>
          </h1>

          <div className="flex items-center p-1.5 rounded-full border border-white/10 bg-white/5 text-xs w-fit mx-auto md:mx-0 mt-4">
            <div className="flex items-center">
              <img className="size-7 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" />
              <img className="size-7 rounded-full border border-white/20 -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" />
              <img className="size-7 rounded-full border border-white/20 -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50" />
            </div>
            <p className="-translate-x-2 text-xs text-slate-300">Join food lovers & creators</p>
          </div>

          <h1 className='font-semibold text-4xl md:text-6xl bg-gradient-to-r from-white via-cyan-300 to-orange-400 bg-clip-text text-transparent max-w-[500px] mt-6'>
            Start Your Journey.
          </h1>

          <p className='text-base text-slate-400 max-w-[380px] mt-4 mx-auto md:mx-0'>
            Discover, share, and connect through food.
          </p> 
        </div>

        {/* RIGHT CARD */}
        <div className='w-full max-w-md z-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl'>
          
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-white text-2xl font-medium">Create Account</h2>
            <p className="text-white/40 text-sm mt-1">
              Already have one? <span className="text-orange-400 cursor-pointer hover:underline">Log in</span>
            </p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-xl mb-6 text-center"
            >
              {error}
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleRequestOTP}
                className="space-y-6"
              >
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="manaskumar@gmail.com"
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-cyan-400/50 focus:ring-cyan-400/20'
                />

                <button
                  type="submit"
                  disabled={loading}
                  className='w-full bg-gradient-to-r from-orange-500 to-orange-400 text-black font-semibold py-3.5 rounded-xl shadow-md shadow-orange-500/10'
                >
                  {loading ? 'Sending...' : 'Continue'}
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleRegister}
                className="space-y-5"
              >
                {/* Role Toggle */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: 'user' })}
                    className={`flex-1 py-3 rounded-xl ${
                      formData.role === 'user'
                        ? 'bg-orange-500 text-black'
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    <User className="inline w-4 h-4 mr-2" /> Foodie
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: 'creator' })}
                    className={`flex-1 py-3 rounded-xl ${
                      formData.role === 'creator'
                        ? 'bg-orange-500 text-black'
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    <ChefHat className="inline w-4 h-4 mr-2" /> Creator
                  </button>
                </div>

                <input
                  name="otp"
                  placeholder="OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-cyan-400/50'
                />

                <input
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-cyan-400/50'
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-cyan-400/50'
                />

                <button
                  type="submit"
                  disabled={loading}
                  className='w-full bg-gradient-to-r from-orange-500 to-orange-400 text-black font-semibold py-3.5 rounded-xl shadow-md shadow-orange-500/10'
                >
                  {loading ? 'Creating...' : 'Create Account'}
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-cyan-400 text-sm"
                >
                  ← Back
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Reg;