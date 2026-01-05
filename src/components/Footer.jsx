import React from 'react'
import { Link } from 'react-router-dom'
import { FaBehance, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-[30vh] flex flex-row justify-between items-center gap-15 px-30 bg-black'>
        <div className='flex flex-col justify-center gap-5'>
            <p className='text-[1.8vw]'>Algo<span className='text-blue-500'>Fy</span></p>
            <p className='text-[1.1vw]'>Interactive visualization tools for mastering data structures and algorithms.</p>
        </div>
        <div className='flex flex-col gap-10 items-center justify-center'>
            <p className='text-[1.2vw]'>Connect With Us</p>
            <div className="flex flex-row gap-6 items-center justify-center">
              <a
                href="https://www.behance.net/luxedeninterior"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </a>
              <a
                href="https://www.instagram.com/luxedeninteriors?igsh=MWN2MnBiYnp4NWh0ag%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/soham-ambede-4b9610241/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </a>
              <a
                href="https://www.youtube.com/@designdeninteriors-p8w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </a>
              <a
                href="https://www.fiverr.com/sohamambede?source=gig_cards&referrer_gig_slug=visualize-a-realistic-3d-interior-design-render&ref_ctx_id=f3ba18e30ef046bd99ec9766a06704d7&imp_id=f2ceea8d-117a-470c-9290-04ef1e579eb8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/fiverr.png" className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border-1 bg-white" alt="" /> 
              </a>
                           
            </div>
        </div>
    </div>
  )
}

export default Footer
