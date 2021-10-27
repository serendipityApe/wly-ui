---
title: Collapse 折叠面板
group:
  title: Collapse 折叠面板
  order: 2
nav:
  title: 组件
  path: /components
  order: 2 
# title: Collapse 折叠面板
# nav:
#   title: 组件
#   order: 2
---

## Collapse 折叠面板

可以折叠/展开的内容区域。

### 代码演示

#### **基本使用**
您可以通过Panel单个使用。
<code src="./demo/basic.tsx"></code>

也可以通过Collapse包裹,使用多个。<br>(强烈建议您使用多个Panel的时候用Collapse包裹)
<code src="./demo/group.tsx"></code>

#### **嵌套使用**
$\color{red}{目前有bug，正在紧急维护中......}$
<code src="./demo/nesting.tsx"></code>
#### **手风琴模式**
每次只打开一个tab
<code src="./demo/accordion.tsx"></code>

#### **可拖拽的**
可拖拽排序
<code src="./demo/draggable.tsx"></code>
### API

#### Collapse
| 属性 | 说明 | 类型 | 默认值 |
| :---- | :---- | :---- | :------ |
| activeKey | 当前激活 tab 面板的 key | string[] \| number[] <br>\| string \| number | - |
| onChange | 切换面板的回调(参数为activeKey) | (keys?:type activeKey) => void | - |
| accordion | 手风琴模式 | boolean | false | - |
| draggable | 拖拽排序 | boolean | false | - |
| onDragged | 拖拽顺序切换后的回调(参数为panel的key值的排序数组) | (keys?:type keySorts) => void | - |

#### Collapse.Panel
| 属性 | 说明 | 类型 | 默认值 |
| :---- | :---- | :---- | :------ |
| header | 面板头内容 | ReactNode | - |
| key | 对应 activeKey | string \| number | - |
| collapsible | 是否可折叠 | 'disabled' | - |