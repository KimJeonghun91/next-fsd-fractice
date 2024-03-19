'use client';

import { useRouter } from 'next/navigation';
import { styled } from "@mui/material";
import RootView from "@kimjeonghun91/my-mui/shared/ui/rootView";
import Form from "@kimjeonghun91/my-mui/widgets/Form";
import { FormValues } from "@kimjeonghun91/my-mui/widgets/Form/model/types";
import { initialValues, validationSchema } from "./model/loginInfo";
import { PrivateRoutes } from '../../shared/constants/urls';

export default function Login() {
  const router = useRouter();

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    router.push(PrivateRoutes.Home);
  }

  return (
    <RootView>
      <LoginBackground>
        <LoginContainer>
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            submitText="로그인"
          />
        </LoginContainer>
      </LoginBackground>
    </RootView>
  );
}

const LoginBackground = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage: `url('/bg_login.jpg')`,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const LoginContainer = styled('div')({
  position: 'relative',
  minWidth: '400px',
  padding: '40px',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  borderRadius: 14,
  marginRight: 50
});
