import { motion } from "framer-motion";

const Gallery = () => {

    const videos = [
        "https://www.pexels.com/download/video/27612135/",
        "https://www.pexels.com/download/video/30044481/",
        "https://www.pexels.com/download/video/30115751/",
        "https://www.pexels.com/download/video/10200311/",
        "https://www.pexels.com/download/video/36689957/",
    ];

    return (
        <section className="relative bg-black text-white py-20 px-4 overflow-hidden">
            <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[15%] w-72 h-72 bg-orange-500/10 blur-[160px] rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Explore what people are <span className="text-orange-400">craving</span>
                </h2>
                <p className="text-slate-400 mt-3 text-sm md:text-base">
                    Scroll through real food moments shared by creators.
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1 } }
                }}
                className="flex items-center gap-3 h-[420px] w-full max-w-5xl mt-12 mx-auto"
            >
                {videos.map((vid, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative group flex-grow w-48 rounded-xl overflow-hidden h-full hover:w-full border border-white/10"
                    >
                        <video
                            src={vid}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover"
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
                        >
                            <p className="text-sm font-medium">Food Reel</p>
                            <p className="text-xs text-slate-300">scroll feed</p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mt-12"
            >
                <button className="bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full text-sm font-medium shadow-md shadow-orange-500/10 transition">
                    Explore More
                </button>
            </motion.div>

        </section>
    );
};

export default Gallery;