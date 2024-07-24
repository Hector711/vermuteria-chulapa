import React, {useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useMenu } from '@/context/MenuContext';



export default function Filter() {
  const { selectedFilters, handleCheckboxChange } = useMenu();
  const sx = {
    '&.Mui-checked': {
      color: pink[600],
    },
  };
  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          Filtro de intolerancias
        </AccordionSummary>
        <AccordionDetails>
        <h4 className='josefin text-center uppercase'>Marque las intolerancias</h4>
        <FormGroup id='checkboxs-container'>
        <FormControlLabel 
            control={<Checkbox sx={sx} name='Huevo' checked={selectedFilters.Huevo} onChange={handleCheckboxChange} />} 
            label='Huevo' 
          />
          <FormControlLabel 
            control={<Checkbox sx={sx} name='Mostaza' checked={selectedFilters.Mostaza} onChange={handleCheckboxChange} />} 
            label='Mostaza' 
          />
          <FormControlLabel 
            control={<Checkbox sx={sx} name='Gluten' checked={selectedFilters.Gluten} onChange={handleCheckboxChange} />} 
            label='Gluten' 
          />
          <FormControlLabel 
            control={<Checkbox sx={sx} name='Pescado' checked={selectedFilters.Pescado} onChange={handleCheckboxChange} />} 
            label='Pescado' 
          />
          <FormControlLabel 
            control={<Checkbox sx={sx} name='Molusco' checked={selectedFilters.Molusco} onChange={handleCheckboxChange} />} 
            label='Molusco' 
          />
          <FormControlLabel 
            control={<Checkbox sx={sx} name='Apio' checked={selectedFilters.Apio} onChange={handleCheckboxChange} />} 
            label='Apio' 
          />
          <FormControlLabel 
            control={<Checkbox sx={sx} name='Lacteos' checked={selectedFilters.Lacteos} onChange={handleCheckboxChange} />} 
            label='Lacteos' 
          />
          <FormControlLabel 
            control={<Checkbox sx={sx} name='Frutos Secos' checked={selectedFilters['Frutos Secos']} onChange={handleCheckboxChange} />} 
            label='Frutos Secos' 
          />
        </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
