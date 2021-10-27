import React from 'react';
import { Collapse } from 'wly-ui';

const { Panel } = Collapse;
function onDragged(sorts) {
  console.log(sorts);
}
export default () => (
  <div>
    <Collapse draggable onDragged={onDragged}>
      <Panel header="测试1" key="测试1">
        展开
      </Panel>
      <Panel header="测试2" key="测试2">
        展开
      </Panel>
      <Panel header="测试3" key="测试3">
        展开
      </Panel>
      <Panel header="测试4" key="测试4">
        展开
      </Panel>
    </Collapse>
  </div>
);
