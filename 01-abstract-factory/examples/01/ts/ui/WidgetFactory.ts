import ScrollBar from './ScrollBar';
import Window from './Window';

export default abstract class WidgetFactory {
  abstract createWindow(): Window
  abstract createScrollBar(): ScrollBar
}
