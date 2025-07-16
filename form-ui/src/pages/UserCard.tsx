// src/pages/UserCard.tsx
import { Card, CardContent, Typography } from '@mui/material';

export const UserCard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <Card sx={{ maxWidth: 400, margin: '40px auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          User Info
        </Typography>
        <Typography><strong>Fullname:</strong> {user.fullname}</Typography>
        <Typography><strong>Email:</strong> {user.email}</Typography>
        <Typography><strong>Password:</strong> {user.password}</Typography>
        <Typography><strong>Remember Me:</strong> {user.remember ? 'Yes' : 'No'}</Typography>
      </CardContent>
    </Card>
  );
};
