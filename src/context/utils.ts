export const getUint8Array = (array: number[]): Uint8Array =>
  new Uint8Array(array);

import {
  TOGGLE_LAYER,
  UPDATE_FILL_COLOR,
  UPDATE_OUTLINE_COLOR,
  UPDATE_OUTLINE_SIZE,
  UPDATE_POINT_SIZE,
  ZOOM_IN,
  ZOOM_OUT,
} from './DataProvider';
import { Action, ReducerState } from './types';

export const dataReducer = (
  state: ReducerState,
  action: Action,
): ReducerState => {
  switch (action.type) {
    case ZOOM_IN:
      return { ...state, zoom: state.zoom + action.value };
    case ZOOM_OUT:
      return { ...state, zoom: state.zoom - action.value };
    case TOGGLE_LAYER:
      return {
        ...state,
        [action.value]: {
          ...state[action.value],
          visible: !state[action.value].visible,
        },
      };
    case UPDATE_FILL_COLOR:
      return {
        ...state,
        [action.layerId]: {
          ...state[action.layerId],
          layerFillColor: action.value,
        },
      };
    case UPDATE_OUTLINE_SIZE:
      return {
        ...state,
        [action.layerId]: {
          ...state[action.layerId],
          lineWidthMinPixels: action.value,
        },
      };
    case UPDATE_OUTLINE_COLOR:
      return {
        ...state,
        [action.layerId]: {
          ...state[action.layerId],
          lineColor: action.value,
        },
      };
    case UPDATE_POINT_SIZE:
      return {
        ...state,
        [action.layerId]: {
          ...state[action.layerId],
          pointRadiusMinPixels: action.value,
        },
      };
    default:
      return state;
  }
};
