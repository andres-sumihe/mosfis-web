import { useState } from 'react';

import CustomButton from '@/components/buttons/CustomButton';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import WelcomeHeader from '../../components/welcome/WelcomeHeader';
import WelcomeSlider from '../../components/welcome/WelcomeSlider';

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
        } mt-6 text-center text-[12px]`}
      >
        <p>© 2021-2022, MOSFIS INDONESIA</p>
      </div>
    </Main>
  );
};

export default Welcome;
