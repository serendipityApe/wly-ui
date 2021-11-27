export interface Props {
  // 间隔距离  处理一下单位
  gap?: string | number;
  // 中间显示的数量
  showQuantity?: number;
  // item宽度
  itemWidth: number | string;
  // 点击事件绑定
  itemClick?: Function;
  //修改点击后的item的className,carousel专属，暂时不向外暴漏
  active?: string
}
