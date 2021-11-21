export interface Props {
  //间隔距离  处理一下单位
  gap: string | number;
  //中间显示的数量
  showQuantity?: number;
  //item宽度
  itemWidth: number | string;
  //点击事件绑定
  itemClick?: Function;
}
