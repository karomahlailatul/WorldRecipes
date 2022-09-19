import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";

const HomePopularRecipes = () => {
  useEffect(() => {
    document.title = "World Recipes";
  }, []);

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="col-12 d-flex">
        <div className="col-12 bg-white d-flex justify-content-start">
          <div className="d-flex align-items-center">
            <div className="rectangle" />
            <h2>&nbsp;Popular For You ! </h2>
          </div>
        </div>
      </div>

      <div className="col-12 d-flex ">
        <div className="col-12 bg-white d-flex">
          <div className="col-12 my-5">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 1,
                },
                1400: {
                  slidesPerView: 1,
                },
              }}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              // mousewheel={true}
              grabCursor={true}
              keyboard={true}
              navigation={false}
              freeMode={true}
              loop={true}
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
              className="swiperHome1"
            >
              
              <SwiperSlide>
                <div className="col-12 d-xl-flex d-lg-flex  d-md-flex d-sm-grid">
                  <div className="col-xl-5 col-lg-5 col-md-4 col-sm-12 ">
                    <img className="imageswipper1" onClick={() => navigate("")} src={require("../../assets/images/home_1.png")} alt="" />
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-8 col-sm-12 mt-sm-4 mb-sm-5 swiper-text">
                    <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                    <h5>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</h5>
                    <button className="btn btn-warning rounded-pill mt-xl-5 mt-lg-5 mt-md-2 mt-sm-2 text-light">Learn More</button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 d-xl-flex d-lg-flex  d-md-flex d-sm-grid">
                  <div className="col-xl-5 col-lg-5 col-md-4 col-sm-12 ">
                    <img className="imageswipper1" onClick={() => navigate("")} src={require("../../assets/images/home_1.png")} alt="" />
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-8 col-sm-12 mt-sm-4 mb-sm-5 swiper-text">
                    <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                    <h5>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</h5>
                    <button className="btn btn-warning rounded-pill mt-xl-5 mt-lg-5 mt-md-2 mt-sm-2 text-light">Learn More</button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 d-xl-flex d-lg-flex  d-md-flex d-sm-grid">
                  <div className="col-xl-5 col-lg-5 col-md-4 col-sm-12 ">
                    <img className="imageswipper1" onClick={() => navigate("")} src={require("../../assets/images/home_1.png")} alt="" />
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-8 col-sm-12 mt-sm-4 mb-sm-5 swiper-text">
                    <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                    <h5>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</h5>
                    <button className="btn btn-warning rounded-pill mt-xl-5 mt-lg-5 mt-md-2 mt-sm-2 text-light">Learn More</button>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePopularRecipes;
