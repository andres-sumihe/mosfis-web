import { useState } from 'react';

import CustomButton from '@/components/buttons/CustomButton';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import WelcomeHeader from './components/WelcomeHeader';
import WelcomeSlider from './components/WelcomeSlider';

const Welcome = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <Main meta={<Meta title="Mosfis | Selamat Datang" description="TESTING" />}>
      <WelcomeHeader display={slideIndex !== 0} />
      <WelcomeSlider callback={(index: number) => setSlideIndex(index)} />
      <div
        className={`custom-animation ${
          slideIndex !== 0 ? 'fade-in' : 'fade-out'
        }`}
      >
        <CustomButton value={'Masuk'} />
        <CustomButton value={'Daftar'} />
      </div>

      <div
        className={`custom-animation ${
          slideIndex === 0 ? 'fade-in' : 'fade-out'
        } text-center text-[12px]`}
      >
        <p>© 2021-2022, MOSFIS INDONESIA</p>
      </div>
    </Main>
  );
};

export default Welcome;
