import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import img1 from '../Assets/10images/blog1.jpg'
import img4 from '../Assets/10images/blog4.jpg'
import img6 from '../Assets/10images/blog6.jpg'
import img5 from '../Assets/10images/blog5.jpg'

const Photography = () => {
   const curosalImg=[
    {
      id:1,
      image:img1
    },
    {
      id:2,
      image:img4
    },
    {
      id:3,
      image:img6
    },
    {
      id:4,
      image:img5
    }
  ]
  const usersData = [
    {
      id: 1,
      img: "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/thumb-1760073200_baeb2e80f1c013f8ab08.jpg",
      name: "Janvi Dharmik Scotland",
      description:
        "Amidst the rolling highlands and timeless castles of Scotland, our story found its rhythm — a melody of love echoing through misty valleys and quiet lochs. Every gust",
      city: "Jaipur",
      imgdata: [
        "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/additional-1760073200_0b8d21064520247757a0.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/additional-1760073200_72c7e119c2f880e8d359.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/additional-1760073200_36d2aa48a10fa70b38cd.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/67c9888208d35/additional-1741260930_b635b783796563cfcf14.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/67c9888208d35/additional-1741260930_738f3003f832adf26e92.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/67c9888208d35/additional-1741260930_5982e25a2ca327e08b33.jpg",
      ],
    },
    {
      id: 2,
      img: "https://ivoryfilms.in/assets/img/portfolios/67c9893b023e3/thumb-1741261115_5fe82aae5ae288283e40.jpg",
      name: "Piyush X Aariva",
      description:
        "Amidst the rolling highlands and timeless castles of Scotland, our story found its rhythm — a melody of love echoing through misty valleys and quiet lochs. Every gust",
      city: "Pune",
      imgdata: [
        "https://ivoryfilms.in/assets/img/portfolios/67c9888208d35/additional-1741260930_b635b783796563cfcf14.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/67c9888208d35/additional-1741260930_738f3003f832adf26e92.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/67c9888208d35/additional-1741260930_5982e25a2ca327e08b33.jpg",
         "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/additional-1760073200_0b8d21064520247757a0.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/additional-1760073200_72c7e119c2f880e8d359.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/additional-1760073200_36d2aa48a10fa70b38cd.jpg",
      ],
    },
    {
      id: 3,
      img: "https://ivoryfilms.in/assets/img/portfolios/67c96d01b649b/thumb-1741253889_bc4176c03834cd52e5f4.jpg",
      name: "Nancy x Nevil",
      description:
        "Capturing the magic of love against Bali's stunning backdrop! 🌴✨ Join us as Nancy & Nevil embark on their prewedding journey, filled with beachside bliss and charming sunsets.",
      city: "Bali",
      imgdata: [
        "https://ivoryfilms.in/assets/img/portfolios/67c97cece9ca0/additional-1741257964_e17c34f068fea281bc1d.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/669e22c0681ef/additional-1721639616_e46f604910beb9b72d87.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/669e1efb36c48/additional-1721638651_9e7de86d4fa1f473851d.jpg",
         "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/additional-1760073200_0b8d21064520247757a0.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/additional-1760073200_72c7e119c2f880e8d359.jpg",
        "https://ivoryfilms.in/assets/img/portfolios/68e895f0e1b18/additional-1760073200_36d2aa48a10fa70b38cd.jpg",
      ],
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const handleChange = (id) => {
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    const currentIndex = usersData.findIndex((d) => d.id === selectedId);
    const nextIndex = (currentIndex + 1) % usersData.length;
    setSelectedId(usersData[nextIndex].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    const currentIndex = usersData.findIndex((d) => d.id === selectedId);
    const prevIndex =
      (currentIndex - 1 + usersData.length) % usersData.length;
    setSelectedId(usersData[prevIndex].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedData = usersData.find((d) => d.id === selectedId);

  return (
   <>
     {!selectedId && <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          {curosalImg.map((ele)=>{
            return <div className={`carousel-item ${ele.id === 1 ? "active": "" }` } key={ele.id}>
            <img src={ele.image} className="d-block w-100" alt="..." height={"600px"}/>
          </div>
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>}
    <div className="container my-4">
      {/* List View */}
      {!selectedId && (
        <div className="row">
          {usersData.map((ele) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4"
              key={ele.id}
            >
              <div className="card shadow-sm border-0">
                <img
                  src={ele.img}
                  alt={ele.name}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "8px 8px 0 0",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">{ele.name}</h4>
                  <p className="text-muted">{ele.city}</p>
                  <p className="card-text">{ele.description}</p>
                  <button
                    className="btn btn-dark w-100"
                    onClick={() => handleChange(ele.id)}
                  >
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail View */}
      {selectedData && (
        <div className="my-5 text-center">
          <h1>{selectedData.name}</h1>
          <h5 className="text-muted mb-3">{selectedData.city}</h5>
          <p className="lead">{selectedData.description}</p>

          <div className="row mt-4">
            {selectedData.imgdata.map((img, index) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-3"
                key={index}
              >
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-outline-dark" onClick={handlePrevious}>
              <FaArrowLeft /> Previous
            </button>
            <button className="btn btn-outline-dark" onClick={handleNext}>
              Next <FaArrowRight />
            </button>
          </div>

          <div className="mt-4">
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedId(null)}
            >
              Back to Gallery
            </button>
          </div>
        </div>
      )}
    </div></>
  );
};

export default Photography;
