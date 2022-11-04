import CustomHeader1 from '@/components/headers/CustomHeader1';
import { screenBaseWidthAndAlign } from '@/styles/globalStyles';

import RegisterForm from './components/RegisterForm';

const index = () => {
  return (
    <div className={screenBaseWidthAndAlign}>
      <CustomHeader1 title={'Daftar Mosfis'} />
      <RegisterForm />
    </div>
  );
};

export default index;
