import React from 'react'
import { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendData = async () => {
        if(!name || !email || !message){
            alert("Please fill all the data correctly");
            return;
        }

        const response = await fetch("http://localhost:3000/sendReview", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({ name, email, message })
        })

        if(response.status == 200){
            alert("Success");
        }else{
            alert("Error");
        }
    }

  return (
    <div className='w-full flex flex-col justify-center items-center gap-20 text-white'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <p className='text-[3vw] font-semibold'>Share Your <span className='text-blue-500'>Experience</span></p>
            <p className='text-[1.2vw]'>Your Feedback's are greatly valued and will help us optimize the experience.</p>
        </div>
        <div className='rounded-xl flex flex-col justify-center gap-10 bg-neutral-950 p-12 w-2/5'>
            <div className='flex flex-row justify-between gap-10 w-full'>
                <div className='flex flex-col justify-center gap-4'>
                    <p className='text-[1.2vw]'>Your Name *</p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='John Doe' className='text-[1.2vw] rounded-xl p-4 border-[1px] border-gray-800'/>
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <p className='text-[1.2vw]'>Your Email *</p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='johndoe@gmail.com' className='text-[1.2vw] rounded-xl p-4 border-[1px] border-gray-800'/>
                </div>
            </div>
            <div className='flex w-full flex-col gap-4 justify-center'>
                <p className='text-[1.2vw]'>Share Your Experience *</p>
                <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your thoughts ...' className='text-[1.2vw] p-4 w-full border-[1px] border-gray-800 rounded-xl min-h-40'/>
            </div>
            <button onClick={sendData} className='px-2 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-[1.2vw] w-[10vw]'>Submit</button>
        </div>
    </div>
  )
}

export default Contact
