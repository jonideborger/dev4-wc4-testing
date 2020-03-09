"use strict";
import { photos } from './data.js';

export const currencies = {
  EURO: {
    icon: '€',
    comparedToEuro: 1,
  },
  DOLLAR: {
    icon: '$',
    comparedToEuro: 1.11,
  },
  POUND: {
    icon: '£',
    comparedToEuro: 0.84,
  },
};

export const photoStore = {
  photos: photos, // Same as photos: photos
  userInput: {
    selectedCurrency: 'DOLLAR',
    selectedPhotographer: 'all',
    selectedSortBy: 'title',
  },
  getTotalEuroPriceOfAllPhotos() {

  },
  applyCurrencyChange() {

  },
  applySortBy() {

  },
  applyPhotographerFilter() {

  },
  applyAll() {

  },
};