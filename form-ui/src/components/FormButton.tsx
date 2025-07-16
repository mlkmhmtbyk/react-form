import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';

type FormButtonProps = ButtonProps & {
  label: string;
};

export const FormButton = ({ label, ...props }: FormButtonProps) => {
  return (
    <Button variant="contained" color="primary" fullWidth {...props}>
      {label}
    </Button>
  );
};
