import { TilejsonResult, VectorTileLayer } from '@deck.gl/carto';

export type RetailStore = {
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

export type Sociodemographic = {
  total_pop: number;
  households: number;
  median_income: number;
};

export type GetVectorTileLayer = <T>(
  data: Promise<TilejsonResult>,
  id: string,
  handleClick: (info: T) => void,
  fillColor: Uint8Array,
) => VectorTileLayer<T>;

export type HoverData = {
  retailStore: RetailStore;
  sociodemographic: Sociodemographic;
};
