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

const HomeCategoryRecipes = () => {
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
            <h2>&nbsp;Region Recipes</h2>
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
                    slidesPerView: 6,
                    grid: { rows: 30, fill: "row" },
                  },
                  1400: {
                    slidesPerView: 6,
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
                    onClick={() => navigate("../category")}
                    src={require("../../assets/images/category/african.jpg")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("../category")}
                    src={require("../../assets/images/category/american-latin.jpg")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("../category")}
                    src={require("../../assets/images/category/american.jpg")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("../category")}
                    src={require("../../assets/images/category/asian.jpg")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("../category")}
                    src={require("../../assets/images/category/australian.jpg")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="link-redirect img-swiper-bottom"
                    onClick={() => navigate("../category")}
                    src={require("../../assets/images/category/european.jpeg")}
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
    </Fragment>
  );
};

export default HomeCategoryRecipes;
