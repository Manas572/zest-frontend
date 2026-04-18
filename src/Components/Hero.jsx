import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
                    * { font-family: "Poppins", sans-serif; }
                `}
            </style>

            <header className="relative flex flex-col items-center bg-black text-white px-4 overflow-hidden min-h-screen">
                {/* Ambient glows */}
                <div className="pointer-events-none absolute top-[18%] left-[20%] w-72 h-72 bg-cyan-500/20 blur-[150px] rounded-full"></div>
                <div className="pointer-events-none absolute top-[48%] right-[18%] w-64 h-64 bg-orange-500/10 blur-[160px] rounded-full"></div>
                <div className="pointer-events-none absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[55rem] h-40 bg-white/5 blur-[120px] rounded-full"></div>

                <Navbar />

                <a href="#explore" className="flex items-center gap-2 rounded-full border border-cyan-500/25 bg-white/5 pl-1 pr-3 py-1 mt-28 backdrop-blur-xl">
                    <span className="bg-cyan-400 text-black text-[10px] font-semibold px-3 py-1 rounded-full">
                        NEW
                    </span>
                    <span className="text-[13px] text-slate-200">
                        Built for food lovers and creators
                    </span>
                </a>

                <h1 className="text-center text-[40px] leading-tight md:text-6xl mt-5 font-semibold max-w-3xl">
                    Taste. Share. Discover. <span className="text-orange-400">Every day.</span>
                </h1>

                <p className="text-center text-sm md:text-base max-w-[620px] mt-4 text-slate-400">
                    Cravegram is your food-first social space — post dishes, explore cravings, and follow restaurants and creators you actually love.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                    <button className="bg-orange-500 active:scale-95 hover:bg-orange-400 transition px-6 py-2.5 text-sm font-semibold rounded-full cursor-pointer text-black shadow-lg shadow-orange-500/10">
                        Start Sharing
                    </button>
                    <button className="border border-white/10 bg-white/5 hover:bg-white/10 transition rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer text-white">
                        Explore Food
                    </button>
                </div>

                <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
                    <div className="flex -space-x-2">
                        <img className="size-8 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80" alt="user1" />
                        <img className="size-8 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=80" alt="user2" />
                        <img className="size-8 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80" alt="user3" />
                    </div>
                    <p>Join the early Cravegram community</p>
                </div>

                <div className="mx-auto mt-14 w-full max-w-7xl md:px-6 lg:px-10 mb-16">
                    <div className="relative mx-auto w-full max-w-5xl">
                        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-h-[320px] bg-cyan-400 blur-[150px] opacity-35 z-0"></div>
                        <div className="pointer-events-none absolute top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500 blur-[170px] opacity-20 z-0 rounded-full"></div>

                        <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                <div className="md:col-span-7 rounded-2xl overflow-hidden border border-white/10 bg-black">
                                    <img
                                        className="h-full w-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400"
                                        alt="food hero"
                                    />
                                </div>

                                <div className="md:col-span-5 grid gap-4">
                                    <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
                                        <p className="text-cyan-300 text-sm font-medium">Discover</p>
                                        <h3 className="mt-2 text-2xl font-semibold">Find dishes worth saving.</h3>
                                        <p className="mt-2 text-sm text-slate-400">
                                            Follow people, places, and meals that match your taste.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <p className="text-xs text-slate-400">What you can do</p>
                                        <ul className="mt-3 space-y-2 text-sm text-slate-200">
                                            <li>• Post food photos and captions</li>
                                            <li>• Explore restaurants and creators</li>
                                            <li>• Save meals to revisit later</li>
                                        </ul>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <p className="text-xs text-slate-400">Top categories</p>
                                        <p className="mt-2 text-lg font-semibold text-orange-300">Street Food • Desserts • Home Recipes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Hero;