import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Grid,
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  FreeMode,
} from "swiper";

const Home = () => {
  useEffect(() => {
    document.title = "World Recipes";
  }, []);

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="home-page">
        <div className="container col-12">
          {/* <div className="col-12 d-flex landing-page-1">
            <div className="col-5 bg-white">
              <div className="title-home-page">
                <h1 className="mb-2">Discover Recipe</h1>
                <h1 className="mb-5">Delicious Food</h1>
                <form className="">
                  <input className="form-control form-control-lg" type="text" placeholder="search restaurant, food" aria-label="search-recipes" />
                </form>
              </div>
            </div>
            <div className="col-1 d-flex align-items-center"></div>
            <div className="col-1 d-flex align-items-center">
              <img className="img-promotion" crossOrigin="anonymous" src={require("../../assets/images/home_1.png")} alt="" />
            </div>
            <div className="col-5 bg-warning"></div>
          </div> */}

          <div className="col-12 d-flex">
            <div className="col-12 bg-white d-flex justify-content-end">
              <div className="d-flex align-items-center">
                <h2>Popular For You !&nbsp; </h2> <div className="rectangle" />
              </div>
            </div>
          </div>
          <div className="col-12 d-flex">
            <div className="col-12 bg-white d-flex">
              <div className="col-12  my-5">
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
                  className="swiperHome1"
                >
                  <SwiperSlide>
                    <div className="col-12 d-flex">
                      <img
                        className="imageswipper1"
                        onClick={() => navigate("")}
                        src={require("../../assets/images/home_1.png")}
                        alt=""
                      />
                      <div className="col-1"></div>
                      <div className="swiper-text">
                        <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                        <h5>
                          Quick + Easy Chicken Bone Broth Ramen- Healthy chicken
                          ramen in a hurry? That’s right!
                        </h5>
                        <button className="btn btn-warning rounded-pill mt-5">
                          {" "}
                          Learn More
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="d-flex">
                      <img
                        className="imageswipper1"
                        onClick={() => navigate("")}
                        src={require("../../assets/images/home_2.png")}
                        alt=""
                      />
                      <div className="col-1"></div>
                      <div className="swiper-text">
                        <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                        <h5>
                          Quick + Easy Chicken Bone Broth Ramen- Healthy chicken
                          ramen in a hurry? That’s right!
                        </h5>
                        <button className="btn btn-warning rounded-pill mt-5">
                          {" "}
                          Learn More
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="d-flex">
                      <img
                        className="imageswipper1"
                        onClick={() => navigate("")}
                        src={require("../../assets/images/home_2.png")}
                        alt=""
                      />
                      <div className="col-1"></div>
                      <div className="swiper-text">
                        <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                        <h5>
                          Quick + Easy Chicken Bone Broth Ramen- Healthy chicken
                          ramen in a hurry? That’s right!
                        </h5>
                        <button className="btn btn-warning rounded-pill mt-5">
                          {" "}
                          Learn More
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="col-12 d-flex">
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
                        <button className="btn btn-warning rounded-pill mt-5">
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
                        <button className="btn btn-warning rounded-pill mt-5">
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
                        <button className="btn btn-warning rounded-pill mt-5">
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
          <div className="col-12 d-flex">
            <div className="col-12 bg-white d-flex">
              <div className="rectangle" />
              <div className="d-flex align-items-center">
                <h2>&nbsp;Popular Recipe</h2>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="container col-12 my-5 category-page ">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 3,

                    grid: { rows: 30, fill: "row" },
                  },
                  576: {
                    slidesPerView: 3,

                    grid: { rows: 30, fill: "row" },
                  },
                  768: {
                    slidesPerView: 3,

                    grid: { rows: 30, fill: "row" },
                  },
                  992: {
                    slidesPerView: 3,
                    grid: { rows: 30, fill: "row" },
                  },
                  1200: {
                    slidesPerView: 3,
                    grid: { rows: 30, fill: "row" },
                  },
                  1400: {
                    slidesPerView: 3,
                    grid: { rows: 30, fill: "row" },
                  },
                }}
                spaceBetween={30}
                // autoplay={{
                //   delay: 5000,
                //   disableOnInteraction: false,
                // }}
                // pagination={{
                //   clickable: true,
                // }}
                // mousewheel={true}
                // keyboard={true}
                // navigation={true}
                freeMode={true}
                // loop={true}
                modules={[
                  Grid,
                  Autoplay,
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Keyboard,
                  FreeMode,
                ]}
                className="swiperHome3"
              >
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("")}
                    src={require("../../assets/images/home_1.png")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("")}
                    src={require("../../assets/images/home_2.png")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("")}
                    src={require("../../assets/images/home_3.png")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("")}
                    src={require("../../assets/images/home_3.png")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("")}
                    src={require("../../assets/images/home_1.png")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("")}
                    src={require("../../assets/images/home_2.png")}
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
