import Map, { InteractiveMapProps } from 'react-map-gl';

export const BaseMap = ({ mapStyle }: InteractiveMapProps) => {
  //console.log('BaseMap props:', props);

  return <Map mapStyle={mapStyle} style={{ width: 500 }} />;
};
