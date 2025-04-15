import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactNode } from 'react';

interface ICollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
}

const CollapsibleSection = ({
  title,
  children,
  defaultExpanded = true,
}: ICollapsibleSectionProps) => {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      disableGutters
      sx={{
        '&:before': {
          display: 'none',
        },
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
        border: '1.5px solid #FFF',
        boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, 0.70)',
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography fontWeight={600}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapsibleSection;
