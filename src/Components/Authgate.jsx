import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Authgate = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 text-white overflow-hidden">
      <div className="absolute top-[30%] left-[30%] w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[20%] right-[25%] w-72 h-72 bg-orange-500/10 blur-[160px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-white via-cyan-300 to-orange-400 bg-clip-text text-transparent">
          You’re missing out 🍔
        </h1>

        <p className="mt-4 text-slate-400">
          Log in to explore trending dishes, follow creators, and share your own cravings.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={() => navigate("/login")}
            className="bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full font-medium shadow-md shadow-orange-500/10 transition"
          >
            Log In
          </button>

          <button
            onClick={() => navigate("/register")}
            className="border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full text-white font-medium transition"
          >
            Create Account
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

export default Authgate;