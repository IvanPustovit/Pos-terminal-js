import { initCheck } from '../../js/controller.js';
import { initMenu } from '../../js/controller.js';
import './component-order-style.scss';

class Order {
  constructor() {
    this.init = this.init.bind(this)
  }

  init(container) {
    this.addToScreen(container, 'beforeend', this.renderOrder());

    this.initializationCheckAndMenuComponents();
  }

  addToScreen(container, position, element) {
    container.insertAdjacentHTML(position, element);
  }

  renderOrder() {
    return `
      <div class="order"></div>`;
  }

  initializationCheckAndMenuComponents() {
    const order = document.querySelector('.order');

    initCheck(order);
    initMenu(order);
  }
}

export default Order;


/**
 * Code for review Order component in index.js file.
 */
  //  import { initOrder } from '@/js/controller';
  //  const root = document.querySelector('#root');
  //  initOrder(root);
 /**
 * Code for review Order component in index.js file.
 */