import React from 'react';
import { Collapse } from 'wly-ui';
// import '../style'

const { Panel } = Collapse;

export default () => (
  <div>
      <Collapse>
        <Panel header="测试1">展开</Panel>
        <Panel header="测试2">展开</Panel>
      </Collapse>
  </div>
);
