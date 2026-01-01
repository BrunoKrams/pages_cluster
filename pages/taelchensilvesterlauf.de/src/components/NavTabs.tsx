import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';


const items = [
  { label: 'Aktuelles', to: '/aktuelles' },
  { label: 'Ergebnisse', to: '/ergebnisse' },
  { label: 'Gallerie', to: '/gallerie' },
];

export default function NavTabs() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNavigate = (to: string, index: number) => {
    setValue(index);
    navigate(to);
    handleClose();
  };

  useEffect(() => {
    const idx = items.findIndex(i => location.pathname.startsWith(i.to));
    if (idx !== -1 && idx !== value) setValue(idx);
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      {isMobile ? (
        <>
          <IconButton aria-label="Menü öffnen" onClick={handleOpen} size="large" color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {items.map((item, idx) => (
              <MenuItem key={item.to} onClick={() => handleNavigate(item.to, idx)}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Seitennavigation Tabs"
          textColor="inherit"
          indicatorColor="secondary"
        >
          {items.map((item, idx) => (
            <Tab key={item.to} label={item.label} value={idx} component={RouterLink} to={item.to} />
          ))}
        </Tabs>
      )}
    </Box>
  );
}
