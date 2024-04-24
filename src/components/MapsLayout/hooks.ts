import { useState } from 'react';
import { getTableData, getTilesetData, getVectorTileLayer } from './utils';
import { HoverData, TableData } from './types';
import { v4 as uuidv4 } from 'uuid';

export const useMap = () => {
  const [dataPointAttribute, setDataPointAttribute] = useState<HoverData>();
  const tableData = getTableData();
  const tilesetData = getTilesetData();

  const layers = [
    getVectorTileLayer<TableData>(tableData, uuidv4()),
    getVectorTileLayer(tilesetData, uuidv4()),
  ];

  const viewState = {
    latitude: 40.690362,
    longitude: -97.011084,
    zoom: 3,
  };

  const handleClick = (info: TableData) => {
    //setDataPointAttribute((prevState) => ({ ...(prevState && pre) , ...info }));
  };

  return { layers, viewState };
};
