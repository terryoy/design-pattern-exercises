import ScrollBar from '../ui/ScrollBar';
import Window from '../ui/Window';
import WidgetFactory from '../ui/WidgetFactory';

import MetroScrollBar from './ScrollBar';
import MetroWindow from './Window';


export default class MetroWidgetFactory extends WidgetFactory {
  createWindow(): Window {
    return new MetroWindow();
  }
  createScrollBar(): ScrollBar {
    return new MetroScrollBar();
  }
}
