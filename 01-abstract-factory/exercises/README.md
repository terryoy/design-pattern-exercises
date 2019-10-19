
===================

### 练习1: 创建不同风格的确认弹窗

问题场景：

在我们的项目里，我们会有三种不同样式风格的确认弹窗，弹窗的按钮分别会有三种样式

 * Primary，蓝色底白色字的按钮
 * Warning, 黄色底白色字的按钮
 * Danger，红色底白色字的按钮

 我们希望构造弹窗的代码和样式无关，它聚焦在如何显示信息和确认关闭的逻辑上。

```

abstract class Button {
  text: string;
}

abstract class Modal {
  promptMessage: string;
  confirmButton: Button;

  abstract show(): void;
  // ... add confirmButton click event handler
}

function createModal(type: string): Modal {
  // ...
}

const defaultModal = createModal('primary');
const warningModal = createModal('warning');
const errorModal = createModal('danger');

```

====================
