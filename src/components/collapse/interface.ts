import { ReactNode } from 'react';

export interface CollapseProps {
  activeKey?: Array<string | number> | string | number;
  accordion?: boolean;
  onChange?: (keys?: CollapseProps['activeKey']) => void;
  draggable?: boolean;
  onDragged?:(keys?: Array<string | number>) => void;
}
export interface CollapsePanelProps {
  header: ReactNode;
  key?: string | number;
  collapsible?: 'disabled';
}
