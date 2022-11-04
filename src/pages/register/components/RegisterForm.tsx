import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import CustomButton from '@/components/buttons/CustomButton';
import CustomDropdown from '@/components/dropdown/CustomDropdown';
import CustomInput from '@/components/forms/CustomInput';
import type { RegisterFormValues } from '@/global/types/globalTypes';
import { kategori } from '@/global/variables/globalDropdown';
import { yupRegisterConfig } from '@/global/yup/globalYup';
import { formStyle1 } from '@/styles/globalStyles';

import CheckboxAgreeTerms from './CheckboxAgreeTerms';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({ resolver: yupResolver(yupRegisterConfig) });

  const Register = () => {};

  return (
    <div className={formStyle1}>
      <form onSubmit={handleSubmit(Register)}>
        <CustomInput
          name={'Nama Lengkap'}
          value={'fullName'}
          inputType={'text'}
          registerForm={register('fullName')}
          errors={errors.fullName}
        />
        <CustomInput
          name={'Nama Pengguna'}
          value={'nickname'}
          inputType={'text'}
          registerForm={register('nickname')}
          errors={errors.nickname}
        />
        <CustomInput
          name={'Nomor Handphone'}
          value={'phoneNumber'}
          inputType={'text'}
          registerForm={register('phoneNumber')}
          errors={errors.phoneNumber}
        />
        <CustomInput
          name={'Email'}
          value={'email'}
          inputType={'text'}
          registerForm={register('email')}
          errors={errors.email}
        />

        <CustomDropdown
          name={'Kategori'}
          value={'kategori'}
          register={register('category')}
          errors={errors.category}
          list={kategori}
        />

        <CustomInput
          name="Password"
          value="password"
          inputType="password"
          registerForm={register('password')}
          errors={errors.password}
        />

        <CustomInput
          name="Konfirmasi Password"
          value="repeatPassword"
          inputType="password"
          registerForm={register('repeatPassword')}
          errors={errors.repeatPassword}
        />

        <CheckboxAgreeTerms
          staticText={'Setuju dengan ketentuan '}
          clickableText={'Mosfis'}
          errors={errors.agreeTerms}
          registerForm={register('agreeTerms')}
        />

        <CustomButton value={'Daftar'} />
      </form>
    </div>
  );
};

export default RegisterForm;
