import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  type?: string;
  rules?: any;
};

export const FormField = ({ name, label, type = 'text', rules }: Props) => {
  const { control, formState: { errors } } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          fullWidth
          margin="normal"
          error={!!errorMessage}
          helperText={errorMessage}
        />
      )}
    />
  );
};
