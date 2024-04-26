import { styled } from '@mui/material';

// conflict between prettier and format on save settings
// eslint-disable-next-line prettier/prettier
export const TooltipContainer = styled('div') <{ x: number; y: number }>`
  position: absolute;
  background-color: #242424;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  padding: 10px;
  border-radius: 0 5px 5px 5px;
`;

export const TooltipContentColumn = styled('div')`
  gap: 20px;
  display: flex;
  justify-content: space-between;
`;

export const TooltipContentItem = styled('div')`
  font-size: 10px;
  font-family: 'Courier New', Courier, monospace;
  text-transform: capitalize;
  color: #fff;
`;
