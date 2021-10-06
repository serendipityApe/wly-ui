import { ReactNode } from 'react';

export interface CollapseProps {
    activeKey?:Array<string | number> | string | number
}
export interface CollapsePanelProps {
    header:ReactNode,
    key?:string | number,
    collapsible?: 'disabled'
}
