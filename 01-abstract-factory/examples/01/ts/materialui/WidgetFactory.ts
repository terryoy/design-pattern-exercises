import { ScrollBar, Window, WidgetFactory } from '../ui';

import MaterialUIScrollBar from './ScrollBar';
import MaterialUIWindow from './Window';


export default class MaterialUIWidgetFactory extends WidgetFactory {
  createWindow(): Window {
    return new MaterialUIWindow();
  }
  createScrollBar(): ScrollBar {
    return new MaterialUIScrollBar();
  }
}
