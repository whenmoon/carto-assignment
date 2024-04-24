import { TilejsonResult, VectorTileLayer } from '@deck.gl/carto';

export type TableData = {
  cartodb_id: number;
  storetype: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  store_id: number;
  revenue: number;
  size_m2: number;
};

export type GetVectorTileLayer = <T>(
  data: Promise<TilejsonResult>,
  id: string,
) => VectorTileLayer<T>;

export type HoverData = {
  tableData: TableData;
};
