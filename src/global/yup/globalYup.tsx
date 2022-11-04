import * as yup from 'yup';

const yupRegisterConfig = yup.object().shape({
  fullName: yup.string().required('Nama lengkap diperlukan'),
  nickname: yup
    .string()
    .required('Nama pengguna diperlukan')
    .min(8, 'Nama pengguna harus terdiri dari minimal 8 karakter'),
  phoneNumber: yup
    .string()
    .required('Nomor handphone diperlukan')
    .matches(/^[0-9]{10,15}$/, 'Format nomor handphone salah'),
  email: yup
    .string()
    .required('Email diperlukan')
    .matches(
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Format email salah'
    ),
  category: yup.string().required('Mohon untuk memilih kategori pengguna'),
  password: yup
    .string()
    .required('Password diperlukan')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
      'Password harus terdiri antara kata sandi antara 8 hingga 15 karakter yang berisi setidaknya satu huruf kecil, satu huruf besar, satu digit angka, dan satu karakter khusus'
    ),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Konfirmasi password tidak sama'),
  agreeTerms: yup
    .bool()
    .oneOf([true], 'Klik centang pada setuju dengan ketentuan mosfis'),
});

export { yupRegisterConfig };
