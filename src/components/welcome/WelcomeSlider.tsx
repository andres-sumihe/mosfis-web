import 'swiper/css';

import router from 'next/router';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomButton from '@/components/buttons/CustomButton';

import DotsIndicator from './DotsIndicator';

interface IWelcomeSliderProps {
  callback: Function;
}

const WelcomeSlider = (props: IWelcomeSliderProps) => {
  const [slideIndex, setSlideIndex] = useState(Number);

  return (
    <div className="h-[50h]">
      <Swiper
        className="mySwiper"
        onSlideChange={(swiper) => {
          setSlideIndex(swiper.realIndex);
          props.callback(swiper.realIndex);
        }}
      >
        <SwiperSlide className="welcome">
          <img
            className="mb-[50px] max-h-[50px] max-w-[50px]"
            src={`${router.basePath}/apple-touch-icon.png`}
            alt="Nextjs starter banner"
          />
          <h2 className="font-semibold">
            Selamat data di <span className="text-[#00AAAD]">Mosfis</span>
          </h2>
          <p className="mb-[80px] text-[12px]">
            Solusi teknologi dalam industri perikanan yang adil untuk semua
            orang
          </p>
          <CustomButton value={'Masuk'} />
          <CustomButton value={'Daftar'} />
          <div>
            <p className="text-[8px] leading-[14px] tracking-[0.2px]">
              Lupa nama pengguna atau kata sandi? <br />
              <span className="text-[#00AAAD]">
                <a>Hubungi Costumer Service</a>
              </span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="welcome">T</SwiperSlide>
        <SwiperSlide className="welcome">T</SwiperSlide>
        <SwiperSlide className="welcome"></SwiperSlide>
        <SwiperSlide className="welcome"></SwiperSlide>
      </Swiper>
      <DotsIndicator index={slideIndex} />
    </div>
  );
};

export default WelcomeSlider;
