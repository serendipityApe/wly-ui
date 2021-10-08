import React from 'react';
import { Collapse } from 'wly-ui';

const { Panel } = Collapse;
export default () => (
  <div>
    <Collapse accordion>
      <Panel header="测试1">展开</Panel>
      <Panel header="测试2">展开</Panel>
    </Collapse>
  </div>
);
