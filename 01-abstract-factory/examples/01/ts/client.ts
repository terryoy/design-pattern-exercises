import {
  ScrollBar, Window, WidgetFactory
} from './ui';
import MetroFactory from './metro/WidgetFactory';
import MaterialUIFactory from './materialui/WidgetFactory';

class Product {
  window: Window
  scrollBar: ScrollBar

  // 当风格改变的时候，业务代码完全不需要改动，达到可移植的目标
  run() {
    this.window.show();
    this.scrollBar.scroll();
  }
}


class Client {

  getWidgetFactory(style: string): WidgetFactory {
    switch (style) {
      case 'metro':
        return new MetroFactory();
      case 'materialui':
        return new MaterialUIFactory();
      default:
        return null;
    }
  }

  // 当风格改变的时候，构造 UI 的代码完全不需要改动，达到可移植的目标
  createProduct(style: string) {
    const widgetFactory = this.getWidgetFactory(style);
    const product = new Product();
    product.window = widgetFactory.createWindow();
    product.scrollBar = widgetFactory.createScrollBar();

    return product;
  }

  createMaterialProduct(): Product {
    return this.createProduct('materialui');
  }

  createMetroProduct(): Product {
    return this.createProduct('metro');
  }

}

const client = new Client();
const metroProduct = client.createMetroProduct();
metroProduct.run();

const materialUIProduct = client.createMaterialProduct();
materialUIProduct.run();
