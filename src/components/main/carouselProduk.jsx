import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import Token from "../../features/token";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./stylesProduk.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

//import tes image
import Laptop from "../../asset/img/laptopPlaceholder.png";

export default function CarouselProduk() {
  // const Navigate = useNavigate();
  const [product, setProducts] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/products`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      {/* Segmen 1 */}
      <h3 style={{ textAlignVertical: "center", textAlign: "center" }}>
        Laptop Unggulan Kami!!
      </h3>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper1"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {product.map((product) => {
          return (
            <>
              <SwiperSlide key={product.id}>
                <div className="d-flex flex-column py-4 Swiper-Slider-Custom">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "300", height: "300" }}
                    fluid
                  />
                  <h5>{product.name}</h5>
                  <h6>{product.description}</h6>

                  <Container className="d-flex justify-content-center">
                    <Button className="mx-auto" variant="primary" size="lg" href="/product">
                      Cek Sekarang!
                    </Button>
                  </Container>
                </div>
              </SwiperSlide>
            </>
          );
        })}
        <SwiperSlide>
          <div className="d-flex flex-column py-4">
            <img
              src={Laptop}
              alt="Laptop"
              style={{ width: "300", height: "300" }}
              fluid
            />
            <h5>Cek Semua Disini!</h5>
            <h6>Cek semua Produk Dsini</h6>

            <Container className="d-flex justify-content-center">
              <Button className="mx-auto" variant="primary" size="lg" href="/product">
                Cek Sekarang!
              </Button>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
