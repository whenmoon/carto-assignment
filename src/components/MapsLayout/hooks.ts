import { useEffect, useRef, useState } from 'react';
import { getTableData, getTilesetData, getVectorTileLayer } from './utils';
import { NodeAttributes, RetailStore, Sociodemographic, UseMap } from './types';
import { useDataContext } from '../../context/DataProvider';
import {
  INITIAL_VIEW_STATE,
  RETAIL_STORES_LAYER_ID,
  SOCIODEMOGRAPHIC_LAYER_ID,
} from '../../contants';

export const useMap: UseMap = () => {
  const [nodeData, setNodeData] = useState<{
    nodeAttributes?: NodeAttributes;
    isTooltipVisible: boolean;
  }>({
    nodeAttributes: undefined,
    isTooltipVisible: true,
  });
  const tableData = getTableData();
  const tilesetData = getTilesetData();

  const handleDataPointClick = (data: NodeAttributes): void => {
    const removeItem = 'layerName';
    delete data.properties[removeItem];
    setNodeData({ isTooltipVisible: true, nodeAttributes: data });
  };

  const { zoom, retailStores, sociodemographics } = useDataContext();

  const layers = [
    getVectorTileLayer<Sociodemographic>({
      data: tilesetData,
      id: SOCIODEMOGRAPHIC_LAYER_ID,
      handleDataPointClick,
      ...sociodemographics,
    }),
    getVectorTileLayer<RetailStore>({
      data: tableData,
      id: RETAIL_STORES_LAYER_ID,
      handleDataPointClick,
      ...retailStores,
    }),
  ].filter(
    (layer) =>
      (layer.id === RETAIL_STORES_LAYER_ID && retailStores.visible) ||
      (layer.id === SOCIODEMOGRAPHIC_LAYER_ID && sociodemographics.visible),
  );

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideTooltip = (event: MouseEvent): void => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setNodeData({ isTooltipVisible: false, nodeAttributes: undefined });
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

  const { nodeAttributes, isTooltipVisible } = nodeData;

  return {
    layers,
    viewState,
    nodeAttributes,
    mapRef,
    isTooltipVisible,
  };
};
