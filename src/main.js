
import FilterView from './view/filter-view.js';
import RoutePointView from './view/route-point-view.js';
import {render, RenderPosition} from './render.js';

const siteControlsFilters = document.querySelector('.trip-controls__filters');

render(new RoutePointView(), siteControlsFilters, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteControlsFilters);

