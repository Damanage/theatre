import * as yup from 'yup'

export default yup.object().shape({
  first_name: yup
    .string()
    .min(2, 'Минимальная длинна поля 2 символа')
    .max(32, 'Максимальная длинна поля 32 символа')
    .required('Обязательное поле'),
  last_name: yup
    .string()
    .min(2, 'Минимальная длинна поля 2 символа')
    .max(32, 'Максимальная длинна поля 32 символа')
    .required('Обязательное поле'),
  email: yup
      .string()
      .email('Введите валдиный Email')
      .required('Обязательное поле'),
  birthday: yup
      .string()
      .required('Обязательное поле'),
  agree: yup
      .boolean()
      .oneOf([true])
      .required('Обязательное поле'),
})
