import { useState } from 'react';
import { getTableData, getTilesetData, getVectorTileLayer } from './utils';
import { DataPoint, RetailStore, Sociodemographic, UseMap } from './types';
import { useDataContext } from '../../context/DataProvider';
import {
  INITIAL_VIEW_STATE,
  RETAIL_STORES_LAYER_ID,
  SOCIODEMOGRAPHIC_LAYER_ID,
} from '../../contants';

export const useMap: UseMap = () => {
  const [dataPoint, setDataPoint] = useState<DataPoint>();
  const tableData = getTableData();
  const tilesetData = getTilesetData();

  const handleClick = (data: DataPoint): void => {
    console.log('data', data);
    setDataPoint(data);
  };

  const { zoom, retailStores, sociodemographics } = useDataContext();

  const layers = [
    getVectorTileLayer<Sociodemographic>({
      data: tilesetData,
      id: SOCIODEMOGRAPHIC_LAYER_ID,
      handleClick,
      ...sociodemographics,
    }),
    getVectorTileLayer<RetailStore>({
      data: tableData,
      id: RETAIL_STORES_LAYER_ID,
      handleClick,
      ...retailStores,
    }),
  ];

  const viewState = {
    ...INITIAL_VIEW_STATE,
    zoom,
  };

  return { layers, viewState, dataPoint };
};
