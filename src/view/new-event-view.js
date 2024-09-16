import {createElement} from '../render.js';

function newEvent() {
  return (
    `<button class='trip-main__event-add-btn  btn  btn--big  btn--yellow'      type='button'>New event
    </button>`
  );
}

export default class NewEventView {
  getTemplate() {
    return newEvent();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
