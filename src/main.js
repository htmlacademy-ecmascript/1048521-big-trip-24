
import {render, RenderPosition} from './render.js';
import FilterView from './view/filter-view.js';
import RoutePointView from './view/route-point-view.js';
import SortingView from './view/sorting-view.js';


const siteControlsFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');

render(new RoutePointView(), siteControlsFilters, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteControlsFilters);
render(new SortingView(), siteEvents);

