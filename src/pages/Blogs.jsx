import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';
import img1 from '../Assets/10images/blog1.jpg'
import img2 from '../Assets/10images/blog2.jpg'
import img3 from '../Assets/10images/blog3.jpg'
import img4 from '../Assets/10images/blog4.jpg'
import img5 from '../Assets/10images/blog5.jpg'
import img6 from '../Assets/10images/blog6.jpg'
const Blogs = () => {
   const videosData = [
     {
      id:1,
      name:"Aashka and Shanil Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
      image:img1,
      date:'1 APR, 2025',
      description:'At Ivory Films, we believe your wedding story is more than a timeline of events — it’s a tapestry of emotions, traditions, and fleeting moments that deserve to be preserved with heart and artistry.',
     },
     {
      id:2,
      name:"Aashka and Shanil Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
      image:img2,
      date:'2 APR, 2025',
      description:'At Ivory Films, we believe your wedding story is more than a timeline of events — it’s a tapestry of emotions, traditions, and fleeting moments that deserve to be preserved with heart and artistry.',
     },
     {
      id:3,
      name:"Aashka and Shanil Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
      image:img3,
      date:'3 APR, 2025',
      description:'At Ivory Films, we believe your wedding story is more than a timeline of events — it’s a tapestry of emotions, traditions, and fleeting moments that deserve to be preserved with heart and artistry.',
     },
     {
      id:4,
      name:"Aashka and Shanil Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
      image:img4,
      date:'4 APR, 2025',
      description:'At Ivory Films, we believe your wedding story is more than a timeline of events — it’s a tapestry of emotions, traditions, and fleeting moments that deserve to be preserved with heart and artistry.',
     },
     {
      id:5,
      name:"Aashka and Shanil Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
      image:img5,
      date:'5 APR, 2025',
      description:'At Ivory Films, we believe your wedding story is more than a timeline of events — it’s a tapestry of emotions, traditions, and fleeting moments that deserve to be preserved with heart and artistry.',
     },
     {
      id:6,
      name:"Aashka and Shanil Unforgettable Wedding Celebration at Fairmont and Raffles Jaipur",
      image:img6,
      date:'6 APR, 2025',
      description:'At Ivory Films, we believe your wedding story is more than a timeline of events — it’s a tapestry of emotions, traditions, and fleeting moments that deserve to be preserved with heart and artistry.',
     }
    ];
    const [currentId, setCurrentId] = useState(1);
    // Handler to change the main video
    const changeVideoHandler = (id) => {
      setCurrentId(id);
    };
    const mainVideo = videosData.find((v) => v.id === currentId);
    // Find next 3 videos (looping around if needed)
    const currentIndex = videosData.findIndex((v) => v.id === currentId);
    const nextThree = [];
    for (let i = 1; i <= 4; i++) {
      nextThree.push(videosData[(currentIndex + i) % videosData.length]);
    }
  return (
     <div className="container my-4">
      {/* FEATURED VIDEO */}
      <div className="mb-4 text-center">
        <h2 className="mb-3">{mainVideo.name}</h2>
        <img src={mainVideo.image} alt=""style={{ width: '100%',height:"500px", borderRadius: '8px' }}/>
        <p className="mt-2"><strong>{mainVideo.date}</strong></p>
        <h4>{mainVideo.description}</h4>
      </div>
      {/* NEXT THREE VIDEOS */}
      <div className="row mt-4">
        {nextThree.map((ele) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4" key={ele.id}>
            <img src={ele.image} alt=""style={{ width: '100%',height:"400px", borderRadius: '8px' }}/>
            <p className="mt-2"><strong>{ele.date}</strong></p>
            <h4>{ele.name}</h4>
            <p>{ele.description}</p>
            <button className="btn" onClick={() => changeVideoHandler(ele.id)}>Read More <FaArrowRight /></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs