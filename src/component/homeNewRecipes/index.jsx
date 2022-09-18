import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  FreeMode,
} from "swiper";

const HomeNewRecipes = () => {
  useEffect(() => {
    document.title = "World Recipes";
  }, []);

  const navigate = useNavigate();

  return (
    <Fragment>
     
    
     <div className="col-12 d-flex ">
            <div className="col-12 bg-white d-flex">
              <div className="rectangle" />
              <div className="d-flex align-items-center">
                <h2>&nbsp;New Recipe!</h2>
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
                  modules={[
                    Autoplay,
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                    FreeMode,
                  ]}
                  className="swiperHome2"
                >
                  <SwiperSlide>
                    <div className="col-12 d-flex">
                      <div className="swiper-text">
                        <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                        <h5>
                          Quick + Easy Chicken Bone Broth Ramen- Healthy chicken
                          ramen in a hurry? That’s right!
                        </h5>
                        <button className="btn btn-warning rounded-pill mt-5 text-light">
                          {" "}
                          Learn More
                        </button>
                      </div>
                      <div className="col-1"></div>
                      <img
                        onClick={() => navigate("")}
                        src={require("../../assets/images/home_1.png")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="col-12 d-flex">
                      <div className="swiper-text">
                        <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                        <h5>
                          Quick + Easy Chicken Bone Broth Ramen- Healthy chicken
                          ramen in a hurry? That’s right!
                        </h5>
                        <button className="btn btn-warning rounded-pill mt-5 text-light">
                          {" "}
                          Learn More
                        </button>
                      </div>
                      <div className="col-1"></div>
                      <img
                        onClick={() => navigate("")}
                        src={require("../../assets/images/home_1.png")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="col-12 d-flex">
                      <div className="swiper-text">
                        <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                        <h5>
                          Quick + Easy Chicken Bone Broth Ramen- Healthy chicken
                          ramen in a hurry? That’s right!
                        </h5>
                        <button className="btn btn-warning rounded-pill mt-5 text-light">
                          {" "}
                          Learn More
                        </button>
                      </div>
                      <div className="col-1"></div>
                      <img
                        onClick={() => navigate("")}
                        src={require("../../assets/images/home_1.png")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
    </Fragment>
  );
};

export default HomeNewRecipes;
