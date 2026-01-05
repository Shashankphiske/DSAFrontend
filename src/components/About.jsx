import React from "react"

function About(){
    return <div className="flex bg-[#171717] flex-col justify-center items-center px-15 w-full gap-10 text-white h-screen">
        <p className="text-[1.2vw] text-blue-500 font-semibold">ⓘ ABOUT US</p>
        <div className="flex flex-col items-center justify-center font-semibold">
            <p className="text-[3vw] ">UNDERSTANDING OVER</p>
            <p className="text-[3vw] text-blue-500">MEMORIZATION</p>
        </div>
        <div className="flex flex-col gap-8 justify-center text-[1.3vw] w-5/7 rounded-xl border-sky-900 border-2 p-12 bg-neutral-950">
            <p>We are a team driven by the belief that understanding algorithms should go beyond memorizing code. Our mission is to simplify data structures and algorithms by transforming abstract concepts into clear, interactive visual experiences that reflect how developers actually think and reason.</p>
            <p>By combining intuitive design, step-by-step visualizations, and structured learning paths, we help learners build strong problem-solving intuition from foundational concepts to advanced algorithms.</p>
            <p>Whether you are a student, a self-taught programmer, or a professional preparing for technical interviews, our platform is designed to make learning DSA engaging, effective, and deeply understandable.</p>
        </div>
    </div>
}

export default About;