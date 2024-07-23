import React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';

export default function FiltersPage() {
  const navigate = useNavigate();
  const sx = {
    // color: pink[900],
    '&.Mui-checked': {
      color: pink[600],
    },
  };
  return (
    <>
      <h3>Marca las intolerancias</h3>
      <div>
        <FormGroup id='inputs-container'>
          <FormControlLabel 
          control={<Checkbox sx={sx}  />} label='Huevo' />
          <FormControlLabel control={<Checkbox sx={sx} />} label='Mostaza' />
          <FormControlLabel control={<Checkbox sx={sx} />} label='Gluten' />
          <FormControlLabel control={<Checkbox sx={sx} />} label='Pescado' />
          <FormControlLabel control={<Checkbox sx={sx} />} label='Molusco' />
          <FormControlLabel control={<Checkbox sx={sx} />} label='Apio' />
          <FormControlLabel control={<Checkbox sx={sx} />} label='Lacteos' />
          <FormControlLabel
            control={<Checkbox sx={sx} />}
            label='Frutos Secos'
          />
        </FormGroup>
      </div>
      <button onClick={() => navigate('/menu')}>Siguiente</button>
    </>
  );
}
