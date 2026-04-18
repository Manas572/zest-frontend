import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 text-white overflow-hidden">

      <div className="absolute top-[30%] left-[25%] w-80 h-80 bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[20%] right-[25%] w-80 h-80 bg-orange-500/10 blur-[170px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-300 to-orange-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page not found
        </h2>

        <p className="mt-4 text-slate-400">
          This page doesn’t exist or you don’t have access to it.
        </p>

        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full font-medium shadow-md shadow-orange-500/10 transition"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full text-white font-medium transition"
          >
            Go Back
          </button>
        </div>
      </motion.div>

      <div className="mt-16 w-full max-w-5xl opacity-40 blur-sm pointer-events-none">
        <div className="flex gap-3 h-[250px]">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex-1 bg-white/5 border border-white/10 rounded-xl"></div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default NotFound;