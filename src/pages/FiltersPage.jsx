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
      <div className='flex flex-col px-4 gap-1 justify-center items-center'>
      <h4 className='josefin text-center uppercase'>Marque las intolerancias</h4>
        <FormGroup id='checkboxs-container'>
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
      <button onClick={() => navigate('/menu')}>Siguiente</button>
      </div>
    </>
  );
}
