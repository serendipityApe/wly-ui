import React from 'react';
import { Collapse } from 'wly-ui';

const { Panel } = Collapse;
function callBack(keys) {
  console.log(keys);
}
export default () => (
  <div>
    <Collapse onChange={callBack}>
      <Panel header="测试1" key="测试1">
        <Panel header="测试1.1" key="测试1.1">
          展开
        </Panel>
      </Panel>
      <Panel header="测试2" key="测试2">
        展开
      </Panel>
    </Collapse>
  </div>
);
