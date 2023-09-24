import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { useAppSelector } from '../../utils/hook';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { ColorModeContext, tokens } from '../../theme';
import { useStyles } from './styles';




const TopBarComponent = () => {
  const { user } = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode: any = useContext(ColorModeContext);
	const classes = useStyles()

console.log(classes.root);



  return (
    <Box
      display="flex"
			alignItems='center'
      justifyContent="space-between"
      px="32px"
      py="24px"
    >
      <Grid>Welcome {user?.firstName}</Grid>
      <Box display="flex">
        <Grid
          sx={{
            pr: '37px',
            borderRight: `1px solid ${colors.borderColor}`,
          }}
        >
          <IconButton
            onClick={colorMode.toggleColorMode}
            sx={{ mr: '28px' }}
          >
            {theme.palette.mode === 'dark' ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            backgroundColor: `${colors.primary[600]}`,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: '8px',
            ml: '28px',
            px: '8px',
          }}
        >
          <IconButton className={classes.root}>
            <SearchIcon />
          </IconButton>

          <InputBase sx={{ py: '8px' }} placeholder="Поиск..." />
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBarComponent;
