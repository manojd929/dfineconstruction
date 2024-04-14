'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Divider, AppBar, Drawer, Button, Box, Typography, List, ListItem, ListItemButton, ListItemText, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CompanyLogoImage from 'public/logo.png'
import { NAV_ITEMS } from "@/constants";
import CONFIG from '@/config/config.json'
import styles from './header.module.css'
import { usePathname } from 'next/navigation';

const DRAWER_WIDTH = 400

const Header = (props: any) => {
  const { company } = CONFIG
  const { window } = props;
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {company.name}
      </Typography>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.link}>
                <ListItemText
                  style={pathname === item.link ? {
                    textDecoration: 'underline'
                  } : {}}
                  primary={item.label}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar component="nav" className={styles.appHeader}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Image
              src={CompanyLogoImage}
              alt={'DFine Constructions Logo'}
              className={styles.companyLogoImage}
            />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {company.name}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {NAV_ITEMS.map((item) => (
              <Button key={item.label} sx={{ color: '#fff' }}>
                <Link
                  href={item.link}
                  style={pathname === item.link ? {
                    textDecoration: 'underline'
                  } : {}}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar >
      <nav className={styles.appHeader}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  )
}

export default Header