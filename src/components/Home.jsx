import React from "react"
import homeimg from "/homeimg.jpg"
import Features from "./Features";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
    return <div className="bg-[#171717] w-full h-screen">
        <div className="w-full bg-[#171717] h-auto flex flex-col items-center justify-center text-white gap-17">
            <div className="h-[20vh]"></div>
            <div className="flex flex-row w-full justify-between items-center gap-20 px-15">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col font-semibold">
                        <p className="text-[3vw]">LEARN <span className="text-blue-500">DSA</span> VISUALLY,</p>
                        <p className="text-[3vw]"><span className="text-blue-500">UNDERSTAND</span> DEEPLY.</p>
                    </div>
                    <div className="flex flex-col text-[1.3vw]">
                        <p className="">Algorithms are easier to master when you can see them.</p>
                        <p className="">Our interactive visualizations transform complex data structures and algorithms into clear, intuitive experiences bridging the gap between theory, understanding, and real-world implementation.</p>
                    </div>
                    <button className="rounded-xl bg-blue-700 hover:bg-blue-800 px-2 py-4 w-[12vw] text-[1.1vw]">Start Visualization</button>
                </div>

                <img src={homeimg} alt="" className="w-[830px] h-auto rounded-3xl"/>
            </div>
            <Features />
            <About />
            <Contact />
            <Footer />
        </div>
    </div>
}

export default Home;