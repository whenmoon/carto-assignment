import { TilejsonResult, VectorTileLayer } from '@deck.gl/carto';
import { UIParameters } from '../../context/types';

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

export type DataPoint = {
  x: number;
  y: number;
  properties: RetailStore | Sociodemographic;
};

export type GetFillColor<T> = (data: T) => Uint8Array;

export type GetVectorTileLayer = <T extends RetailStore | Sociodemographic>(
  args: Omit<UIParameters, 'visible'> & {
    data: Promise<TilejsonResult>;
    id: string;
    handleClick: (data: DataPoint) => void;
    getFillColor?: GetFillColor<T>;
  },
) => VectorTileLayer<T>;

export type HoverData = {
  retailStore: RetailStore;
  sociodemographic: Sociodemographic;
};

type ViewState = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type UseMap = () => {
  dataPoint: DataPoint | undefined;
  layers: (VectorTileLayer<Sociodemographic> | VectorTileLayer<RetailStore>)[];
  viewState: ViewState;
};
