import { LayerId } from '../../context/types';

export type LayerEditorProps = {
  layers: {
    title: string;
    id: LayerId;
  }[];
};
