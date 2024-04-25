import { useState } from 'react';
import { getTableData, getTilesetData, getVectorTileLayer } from './utils';
import { HoverData, RetailStore, Sociodemographic } from './types';
import { useDataContext } from '../../context/DataProvider';
import {
  INITIAL_VIEW_STATE,
  RETAIL_STORES_LAYER_ID,
  SOCIODEMOGRAPHIC_LAYER_ID,
} from '../../contants';

export const useMap = () => {
  const [dataPointAttribute, setDataPointAttribute] = useState<HoverData>();
  const tableData = getTableData();
  const tilesetData = getTilesetData();

  const handleClick = (info: RetailStore | Sociodemographic): void => {
    console.log('info', info);

    //setDataPointAttribute((prevState) => ({ ...(prevState && pre) , ...info }));
  };

  const { zoom, retailStoresUI, sociodemographicsUI } = useDataContext();

  const {
    layerFillColor: retailStoresLayerFillColor,
    focusedColumnFillColor: retailStoresFocusedColumnFillColor,
    lineWidthMinPixels: retailStoresLineWidthMinPixels,
    pointRadiusMinPixels: retailStoresPointRadiusMinPixels,
  } = retailStoresUI;

  const {
    layerFillColor: sociodemographicsLayerFillColor,
    focusedColumnFillColor: sociodemographicsFocusedColumnFillColor,
    lineWidthMinPixels: sociodemographicsLineWidthMinPixels,
    pointRadiusMinPixels: sociodemographicsPointRadiusMinPixels,
  } = sociodemographicsUI;

  const layers = [
    getVectorTileLayer<Sociodemographic>(
      tilesetData,
      SOCIODEMOGRAPHIC_LAYER_ID,
      handleClick,
      sociodemographicsLayerFillColor,
      sociodemographicsFocusedColumnFillColor,
      sociodemographicsLineWidthMinPixels,
      sociodemographicsPointRadiusMinPixels,
    ),
    getVectorTileLayer<RetailStore>(
      tableData,
      RETAIL_STORES_LAYER_ID,
      handleClick,
      retailStoresLayerFillColor,
      retailStoresFocusedColumnFillColor,
      retailStoresLineWidthMinPixels,
      retailStoresPointRadiusMinPixels,
    ),
  ];

  const viewState = {
    ...INITIAL_VIEW_STATE,
    zoom,
  };

  return { layers, viewState };
};
