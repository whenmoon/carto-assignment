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
  income_per_capita: number;
};

export type GetFillColor<T> = (data: T) => Uint8Array;

export type GetVectorTileLayer = <T extends RetailStore | Sociodemographic>(
  data: Promise<TilejsonResult>,
  id: string,
  handleClick: (data: T) => void,
  layerFillColor: Uint8Array,
  focusedColumnFillColor: Uint8Array,
  lineWidthMinPixels: number,
  pointRadiusMinPixels: number,
  getFillColor?: GetFillColor<T>,
) => VectorTileLayer<T>;

export type HoverData = {
  retailStore: RetailStore;
  sociodemographic: Sociodemographic;
};
