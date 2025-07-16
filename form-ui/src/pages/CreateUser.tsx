// src/pages/CreateUser.tsx
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormField } from '../components/FormFiled';

type FormData = {
  fullname: string;
  email: string;
  password: string;
  remember: boolean;
};

export const CreateUser = () => {
  const navigate = useNavigate();

  const methods = useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = (data: FormData) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/user');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: '40px auto' }} noValidate>
        <Typography variant="h5" gutterBottom>
          Create User
        </Typography>

        {/* Fullname zorunlu */}
        <FormField
          name="fullname"
          label="Fullname *"
          rules={{ required: 'Fullname is required' }}
        />

        {/* Email regex validasyonu */}
        <FormField
          name="email"
          label="Email *"
          type="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basit email regex
              message: 'Invalid email format',
            },
          }}
        />

        {/* Password alfanümerik regex */}
        <FormField
          name="password"
          label="Password *"
          type="password"
          rules={{
            required: 'Password is required',
            pattern: {
              value: /^[a-zA-Z0-9]+$/, // Sadece alfanümerik karakterler
              message: 'Password must be alphanumeric',
            },
          }}
        />

        <FormControlLabel
          control={<Checkbox {...methods.register('remember')} />}
          label="Remember Me"
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};
