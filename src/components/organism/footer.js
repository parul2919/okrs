import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#d8dae6',
    color: '#fff',
    boxShadow: '0 -3px 4px rgba(0,0,0,0.3)',
    marginTop: '50px',
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <footer>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        className={classes.root}
        >
          <BottomNavigationAction label="Styled Css" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Context Api" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="React JS" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Material Ui" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="React Bootstrap" icon={<FavoriteIcon />} />
        </BottomNavigation>
    </footer>
  );
}
