import CustomHeader1 from '@/components/headers/CustomHeader1';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import RegisterForm from '../../components/register/RegisterForm';

const index = () => {
  return (
    <Main
      meta={<Meta title="Mosfis | Selamat Datang" description="Register" />}
    >
      <CustomHeader1 title={'Daftar Mosfis'} />
      <RegisterForm />
    </Main>
  );
};

export default index;
