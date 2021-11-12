export function throttle(func: Function, wait: number) {
  let flag = true;
  return function(...args: any) {
    if (!flag) return;
    flag = false;
    func.apply(this, args);
    setTimeout(() => {
      flag = true;
    }, wait);
  };
}
