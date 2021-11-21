import React from 'react';
import { Grallery } from 'wly-ui';

export default () => (
  <Grallery
    showQuantity={3}
    gap={10}
    itemWidth={45}
    itemClick={k => {
      console.log(k);
    }}
  >
    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />
    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />
    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />
    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />
  </Grallery>
);
