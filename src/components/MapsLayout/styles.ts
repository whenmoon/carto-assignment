import DeckGL from '@deck.gl/react';
import styled from 'styled-components';

export const MapsContainer = styled('div')`
  /*  wrapper styles taken from https://deck.gl/examples/arc-layer */
  position: absolute;
  inset: 0px;
  overflow: hidden !important;
`;

export const DeckGLWrapper = styled(DeckGL)``;
