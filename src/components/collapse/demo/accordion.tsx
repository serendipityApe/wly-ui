import React from 'react';
import { Collapse } from 'wly-ui';

const { Panel } = Collapse;
function callBack(keys) {
  console.log(keys);
}
export default () => (
  <div>
    <Collapse onChange={callBack} accordion>
      <Panel header="测试1">展开</Panel>
      <Panel header="测试2">展开</Panel>
    </Collapse>
  </div>
);
