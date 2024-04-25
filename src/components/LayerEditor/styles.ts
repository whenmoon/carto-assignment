import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from '@mui/material';

export const LayerEditor = styled(Accordion)`
  margin-bottom: 8px;
  background-color: rgba(168, 188, 189, 0.9);
`;
export const LayerTitle = styled(AccordionSummary)`
  font-weight: 600;
`;
export const LayerContent = styled(AccordionDetails)`
  padding: 0 0 0 10px;
`;
