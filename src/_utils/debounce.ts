// 可控制频率的防抖
// https://github.com/serendipityApe/javascriptPromotion/issues/8

export default function debounce(
  func: Function,
  wait: number,
  option = { leading: false, trailing: true },
) {
  let timer: NodeJS.Timeout | null = null;
  return function() {
    let isInvoked = false;
    if (timer == null && option.leading) {
      func.apply(this, arguments);
      isInvoked = true;
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (option.trailing && !isInvoked) {
        func.apply(this, arguments);
      }
      timer = null;
    }, wait);
  };
}
