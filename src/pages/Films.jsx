import video1 from '../Assets/videos/video1.mp4';
import video2 from '../Assets/videos/video2.mp4';
import video3 from '../Assets/videos/video3.mp4';
import video4 from '../Assets/videos/video4.mp4';
import video5 from '../Assets/videos/video5.mp4';
import video6 from '../Assets/videos/video6.mp4';
import video7 from '../Assets/videos/video7.mp4';
import video8 from '../Assets/videos/video8.mp4';
import video9 from '../Assets/videos/video9.mp4';
import video10 from '../Assets/videos/video10.mp4';
import { FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';
const Films = () => {
   const videosData = [
    { id: 1, name: "Yashvi Karan Boho Night", video: video1, date: '1 Dec 14, 2024', description: "This journey has let us explore cultures we never experienced before, and meet people we have never met before. And this was yet another one of such occasions. Nikhil and Thanvi’s giant South Indian wedding was all about observing the intricate beauty of South Indian culture up close, we couldn't help but marvel at the richness and diversity of our heritage." },
    { id: 2, name: "Yashvi Karan Boho Night", video: video2, date: '2 Dec 14, 2024', description: 'Bohemian vibes, laughter, and creativity.' },
    { id: 3, name: "Yashvi Karan Boho Night", video: video3, date: '3 Dec 14, 2024', description: 'Freedom, creativity, and love — all under one sky.' },
    { id: 4, name: "Yashvi Karan Boho Night", video: video4, date: '4 Dec 14, 2024', description: 'Dreamers and lovers gather under the stars.' },
    { id: 5, name: "Yashvi Karan Boho Night", video: video5, date: '5 Dec 14, 2024', description: 'Moments that shimmer like stars in the night.' },
    { id: 6, name: "Yashvi Karan Boho Night", video: video6, date: '6 Dec 14, 2024', description: 'Wild hearts and moonlit laughter fill the air.' },
    { id: 7, name: "Yashvi Karan Boho Night", video: video7, date: '7 Dec 14, 2024', description: 'Lost in music, found in magic — the Boho way.' },
    { id: 8, name: "Yashvi Karan Boho Night", video: video8, date: '8 Dec 14, 2024', description: 'The moon smiles upon our carefree hearts tonight.' },
    { id: 9, name: "Yashvi Karan Boho Night", video: video9, date: '9 Dec 14, 2024', description: 'A night to remember, where every second glows.' },
    { id: 10, name: "Yashvi Karan Boho Night", video: video10, date: '10 Dec 14, 2024', description: 'Cheers to art, soul, and wild spirits of Boho.' },
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
  for (let i = 1; i <= 3; i++) {
    nextThree.push(videosData[(currentIndex + i) % videosData.length]);
  }
  return (
   <div className="container my-4">
      {/* FEATURED VIDEO */}
      <div className="mb-4 text-center">
        <h2 className="mb-3">{mainVideo.name}</h2>
        <video key={mainVideo.video} controls style={{ width: '100%', borderRadius: '8px' }}>
          <source src={mainVideo.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="mt-2"><strong>{mainVideo.date}</strong></p>
        <h4>{mainVideo.description}</h4>
      </div>
      {/* NEXT THREE VIDEOS */}
      <div className="row mt-4">
        {nextThree.map((ele) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4" key={ele.id}>
            <h4>{ele.name}</h4>
            <video controls style={{ width: '100%', borderRadius: '8px' }}>
              <source src={ele.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-2"><strong>{ele.date}</strong></p>
            <p>{ele.description}</p>
            <button className="btn" onClick={() => changeVideoHandler(ele.id)}>Read More <FaArrowRight /></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Films