import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormField } from '../components/FormFiled';
import { FormButton } from '../components/FormButton';

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

        <FormField
          name="fullname"
          label="Fullname *"
          rules={{ required: 'Fullname is required' }}
        />

        <FormField
          name="email"
          label="Email *"
          type="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            },
          }}
        />

        <FormField
          name="password"
          label="Password *"
          type="password"
          rules={{
            required: 'Password is required',
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: 'Password must be alphanumeric',
            },
          }}
        />

        <FormControlLabel
          control={<Checkbox {...methods.register('remember')} />}
          label="Remember Me"
        />

        <FormButton label="Submit" type="submit" />
      </form>
    </FormProvider>
  );
};
