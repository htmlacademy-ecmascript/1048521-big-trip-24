import {MOCK_POINTS} from '../mock/task-points.js';
import {MOCK_OFFERS} from '../mock/task-offers.js';
import {MOCK_DESTINATIONS} from '../mock/task-destinations';

function mergeDataArrays(points, offers, destinations) {
  return points.map((point) => {
    const offerType = offers.find((offer) => offer.type === point.type);
    const additionalOffers = offerType ? offerType.offers : [];
    const filteredOffersDetails = additionalOffers.filter((offerDetail) =>
      point.offers.includes(offerDetail.id)
    );

    const destination = destinations.find((dest) => dest.id === point.destination);
    const destinationDetails = destination ? { name: destination.name, description: destination.description, pictures: destination.pictures } : null;

    return {
      ...point,
      offers: filteredOffersDetails,
      destinationDetails,
    };
  });
}

const mergedData = mergeDataArrays(MOCK_POINTS, MOCK_OFFERS, MOCK_DESTINATIONS);
console.log(mergedData);

function merge() {
}

export default class TasksModel {
  tasks = Array.from({length: 30}, merge);

  getTasks() {
    return this.tasks;
  }
}
