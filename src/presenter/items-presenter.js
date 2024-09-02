import ItemView from '../view/item-view.js';
import {render} from '../render.js';

export default class ItemsPresenter {
  constructor({listContainer}) {
    this.listContainer = listContainer;
  }

  init() {
    for (let i = 0; i < 3; i++) {
      render(new ItemView(), this.listContainer.getElement());
    }
  }
}
