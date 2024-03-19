import * as yup from 'yup';

export const initialValues = {
    email: {
        id: 'email',
        value: '',
        label: '이메일',
        type: 'text'
    },
    password: {
        id: 'password',
        value: '',
        label: '비밀번호',
        type: 'password'
    },
}

export const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});
