import { useState } from 'react';
import { getTableData, getTilesetData, getVectorTileLayer } from './utils';
import { HoverData, RetailStore, Sociodemographic } from './types';
import { v4 as uuidv4 } from 'uuid';
import { useDataContext } from '../../context/DataProvider';

export const useMap = () => {
  const [dataPointAttribute, setDataPointAttribute] = useState<HoverData>();
  const tableData = getTableData();
  const tilesetData = getTilesetData();

  const handleClick = (info: RetailStore | Sociodemographic): void => {
    console.log('info', info);

    //setDataPointAttribute((prevState) => ({ ...(prevState && pre) , ...info }));
  };

  const { zoom, retailStoresUI, sociodemographicsUI } = useDataContext();

  const layers = [
    getVectorTileLayer<RetailStore>(
      tableData,
      uuidv4(),
      handleClick,
      retailStoresUI.fillColor,
    ),
    getVectorTileLayer<Sociodemographic>(
      tilesetData,
      uuidv4(),
      handleClick,
      sociodemographicsUI.fillColor,
    ),
  ];

  const viewState = {
    latitude: 40.690362,
    longitude: -97.011084,
    zoom,
  };

  return { layers, viewState };
};
