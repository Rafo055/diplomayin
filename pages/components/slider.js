import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import erevan from "../../pages/images/slider/erevan-gisher.jpg";
import dilijan from "../../pages/images/slider/dilijan.jpg";
import gyumri from "../../pages/images/slider/gyumri.jpg";
import caxkadzor from "../../pages/images/slider/caxkadzor-photo1.jpg";
import dilijann from "../../pages/images/slider/dilijann.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Slider = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <img src={dilijann.src} />
        <div
          style={{
            padding: "20px 16px 16px",
            background: "#143047",

          }}
        >
          <div style={{ textAlign: "left", fontWeight: "bold" }}>Դիլիջան</div>
          <div style={{ textAlign: "left", fontSize: "14px" }}>69կմ</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={erevan.src} />
        <div
          style={{
            padding: "20px 16px 16px",
            background: "#143047",
          }}
        >
          <div style={{ textAlign: "left", fontWeight: "bold" }}>Երևան</div>
          <div style={{ textAlign: "left", fontSize: "14px" }}>1 km</div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={gyumri.src} />
        <div
          style={{
            padding: "20px 16px 16px",
            background: "#143047",
          }}
        >
          <div style={{ textAlign: "left", fontWeight: "bold" }}>Գյումրի</div>
          <div style={{ textAlign: "left", fontSize: "14px" }}>125 կմ</div>
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <img src={caxkadzor.src} />
        <div
          style={{
            padding: "20px 16px 16px",
            background: "#143047",
          }}
        >
          <div style={{ textAlign: "left", fontWeight: "bold" }}>Ծաղկաձոր</div>
          <div style={{ textAlign: "left", fontSize: "14px" }}>54 կմ</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
