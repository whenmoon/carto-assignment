import { ButtonProps as MUIButtonProps } from '@mui/material';

export type ButtonProps = Omit<MUIButtonProps, 'variant' | 'size' | 'sx'>;
