import { styled } from '@mui/material';

// eslint-disable-next-line prettier/prettier
export const TooltipContainer = styled('div') <{ x: number; y: number }>`
  position: absolute;
  height: fit-content;
  background-color: #242424;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  border-radius: 5px;
`;

export const TooltipContentColumn = styled('div')`
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TooltipDivider = styled('div')`
  margin: 10px 0;
`;

export const TooltipContentItem = styled('div')`
  font-size: 10px;
  font-family: 'Courier New', Courier, monospace;
  text-transform: capitalize;
  width: fit-content;
  color: #fff;
`;
