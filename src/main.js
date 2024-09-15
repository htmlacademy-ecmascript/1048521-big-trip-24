
import {render, RenderPosition} from './render.js';
import FilterView from './view/filter-view.js';
import RoutePointView from './view/route-point-view.js';
import SortingView from './view/sorting-view.js';
import ListView from './view/list-view.js';
import ItemsPresenter from './presenter/items-presenter.js';
import newEventView from './view/new-event-view';
import TasksModel from './model/tasks-model.js';

const siteControlsFilters = document.querySelector('.trip-controls__filters');
const siteEvents = document.querySelector('.trip-events');

render(new RoutePointView(), siteControlsFilters, RenderPosition.AFTERBEGIN);

render(new SortingView(), siteEvents);

const listView = new ListView();
render(listView, siteEvents);

const tasksModel = new TasksModel();
const itemsPresenter = new ItemsPresenter({listContainer: listView, tasksModel});
itemsPresenter.init();

const filterView = new FilterView();
render(filterView, siteControlsFilters);

const newEventButtonView = new newEventView();

const tripFilters = document.querySelector('.trip-filters');
render(newEventButtonView, tripFilters);


// import {MOCK_POINTS} from './mock/task-points.js';
// import {MOCK_OFFERS} from './mock/task-offers.js';
// import {MOCK_DESTINATIONS} from './mock/task-destinations';


// function mergeDataArrays(points, offers, destinations) {

//   return points.map((point) => {
//     const offerType = offers.find((offer) => offer.type === point.type);
//     const additionalOffers = offerType ? offerType.offers : [];
//     const filteredOffersDetails = additionalOffers.filter((offerDetail) =>
//       point.offers.includes(offerDetail.id)
//     );

//     const destination = destinations.find((dest) => dest.id === point.destination);
//     const destinationDetails = destination ? { name: destination.name, description: destination.description, pictures: destination.pictures } : null;

//     return {
//       ...point,
//       offers: filteredOffersDetails,
//       destinationDetails,
//     };
//   });
// }

// const mergedData = mergeDataArrays(MOCK_POINTS, MOCK_OFFERS, MOCK_DESTINATIONS);
// console.log(mergedData);
