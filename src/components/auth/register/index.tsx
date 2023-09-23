import { Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = ({
  setEmail,
  setFirstName,
  setPassword,
  setRepeatPassword,
  setUsername,
	navigate
}): JSX.Element => {
  return (
    <>
      <Typography
        variant="h2"
        fontFamily="Poppins"
        textAlign="center"
      >
        Регистрация
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Poppins"
        textAlign="center"
        marginBottom={3}
      >
        Введите данные для регистрации
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        variant="outlined"
        placeholder="Введите ваш имя"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Введите ваш Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        fullWidth
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        type="password"
        fullWidth
        margin="normal"
        label="Confirm password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <Button
        type="submit"
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
        }}
        variant="contained"
      >
        Регистрация
      </Button>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас есть аккаунт?
        <span
          className="incitingText"
          onClick={() => navigate('/login')}
        >
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
