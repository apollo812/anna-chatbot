import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentLanguage } from '../../redux/globalReducer';

import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './index.css';

const useStyles = makeStyles({
  customSelect: {
    backgroundColor: '#060B1A',
    boxShadow: '0px 0px 0px 2px #1E3A8A',
    borderColor: '#1E3A8A',
    color: 'white !important',
    width: '120px',
    '&:focus': {
      backgroundColor: 'gray'
    }
  }
});

function LanguageSelect() {
  const classes = useStyles();
  const options = [
    { value: 'du', lang: 'Dutch' },
    { value: 'en', lang: 'English' },
    { value: 'fr', lang: 'French' },
    { value: 'sp', lang: 'Spanish' }
  ];
  const { i18n } = useTranslation();

  const dispatch = useDispatch();
  const { globalState } = useSelector((state) => state);

  const [lang, setLang] = React.useState('');

  React.useEffect(() => {
    setLang(globalState.language);
  }, []);

  const handleChange = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
    dispatch(setCurrentLanguage(event.target.value));
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <Select size="small" displayEmpty value={lang} onChange={handleChange} className={classes.customSelect}>
          {options.map((data, index) => (
            <MenuItem key={index} value={data.value}>
              {data.lang}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default LanguageSelect;
