
import {render, RenderPosition} from './render.js';
import FilterView from './view/filter-view.js';
import RoutePointView from './view/route-point-view.js';
import SortingView from './view/sorting-view.js';
import ListView from './view/list-view.js';
import ItemsPresenter from './presenter/items-presenter.js';
import newEventView from './view/new-event-view';
import {MOCK_POINTS} from '../mock/task-points';
import {MOCK_OFFERS} from '../mock/task-offers';
import {MOCK_DESTINATIONS} from '../mock/task-destinations.js';

const siteControlsFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');

render(new RoutePointView(), siteControlsFilters, RenderPosition.AFTERBEGIN);

render(new SortingView(), siteEvents);

const listView = new ListView();
render(listView, siteEvents);
const itemsPresenter = new ItemsPresenter({listContainer: listView});
itemsPresenter.init();

const filterView = new FilterView();
render(filterView, siteControlsFilters);

const newEventButtonView = new newEventView();

const tripFilters = document.querySelector('.trip-filters');
render(newEventButtonView, tripFilters);
