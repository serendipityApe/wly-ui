import { useRef, useEffect } from 'react';

//func:当对应state更新时执行函数  listener:监听的state  ...args:func的参数
export function useUpdateEffect(func: Function, listener: any[], ...args: any[]) {
  let isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      func.apply(undefined, args);
    }
  }, listener);
}
