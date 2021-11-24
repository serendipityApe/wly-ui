import React, { useState, useEffect, useRef } from 'react';
import { CollapseProps } from './interface';
import CollapsePanel from './collapsePanel';

import { toArray } from '../../_utils/array';
import { throttle } from '../../_utils/throttle';
import { cloneElement } from '../../_utils/reactNode';

interface CollaspeInterface extends React.FC<CollapseProps> {
  Panel: typeof CollapsePanel;
}
const defaultProps = {};

const Collapse: CollaspeInterface = userProps => {
  const props = { ...defaultProps, ...userProps };
  const [activeKey, setActiveKey] = useState(props.activeKey ? props.activeKey : []);
  const [sorts, setSorts] = useState(initSorts());

  function initSorts() {
    const arr = [];
    for (let i = 0; i < toArray(props.children).length; i++) {
      arr[i] = i;
    }
    return arr;
  }
  // panel组件替换,加入props
  function getItems() {
    const { children, accordion, draggable } = props;
    return toArray(children).map((child: React.ReactElement, index: number) => {
      const key = child.key || String(index);
      const childProps = {
        ...child.props,
        activeKey,
        setActiveKey,
        key,
        myKey: key,
        accordion,
        draggable,
      };
      return cloneElement(child, childProps);
    });
  }
  // draggable使用   根据sorts排列panel
  function sortItems() {
    const { children, accordion, draggable } = props;
    return sorts.map((index: number) => {
      const child = toArray(children)[index];
      const key = child.key || String(index);
      const childProps = {
        ...child.props,
        activeKey,
        setActiveKey,
        key,
        myKey: key,
        accordion,
        draggable,
      };
      return cloneElement(child, childProps);
    });
  }

  // draggable使用  计算event当前权值
  function _index(el: any) {
    let index = 0;

    if (!el || !el.parentNode) {
      return -1;
    }

    while (el && (el = el.previousElementSibling)) {
      index++;
    }

    return index;
  }
  // Panel Drag事件委托
  const [startIndex, setStartIndex] = useState(0);
  function dragStart(event: React.DragEvent<HTMLDivElement>) {
    // console.log(event.target);
    setStartIndex(_index(event.target));
  }
  function dragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const { target } = event;
    if (target instanceof Element) {
      const curIndex = _index(target.parentNode);
      if (
        target.nodeName == 'HEADER' &&
        target.className == 'collapse__header' &&
        startIndex !== curIndex
      ) {
        const arr = [...sorts];
        // 交换当前鼠标位置的Index与开始时的index
        [arr[startIndex], arr[curIndex]] = [arr[curIndex], arr[startIndex]];
        setStartIndex(curIndex);
        setSorts(arr);
      }
    }
  }
  const myDragOver = throttle(dragOver, 300);

  if (props.onChange) {
    updateEffect(props.onChange, [activeKey], activeKey);
  }
  if (props.draggable && props.onDragged) {
    updateEffect(
      props.onDragged,
      [sorts],
      (() =>
        // 参数为panel的key排序数组
         sorts.map((index: number) => {
          const child = toArray(props.children)[index];
          const key = child.key || String(index);
          return key;
        })
      )(),
    );
  }
  // func:当对应state更新时执行函数  listener:监听的state  ...args:func的参数
  function updateEffect(func: Function, listener: any[], ...args: any[]) {
    const isInitialMount = useRef(true);
    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        func.apply(undefined, args);
      }
    }, listener);
  }

  return props.draggable ? (
    <div
      className="collapse"
      onDragStart={event => dragStart(event)}
      onDragOver={event => myDragOver(event)}
    >
      {sortItems()}
    </div>
  ) : (
    <div className="collapse">{getItems()}</div>
  );
};

Collapse.Panel = CollapsePanel;
export default Collapse;
