import { useEffect, useRef, useState } from 'react';
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
  ].filter(
    (layer) =>
      (layer.id === RETAIL_STORES_LAYER_ID && retailStores.visible) ||
      (layer.id === SOCIODEMOGRAPHIC_LAYER_ID && sociodemographics.visible),
  );

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideTooltip = (event: MouseEvent): void => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setIsTooltipVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideTooltip);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideTooltip);
    };
  }, []);

  const viewState = {
    ...INITIAL_VIEW_STATE,
    zoom,
  };

  return {
    layers,
    viewState,
    dataPoint,
    mapRef,
    isTooltipVisible,
  };
};
