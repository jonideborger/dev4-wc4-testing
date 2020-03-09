"use strict";

import { photoStore, currencies } from './index';
import { photos } from './data';

test(`
Wanneer je photoStore.getTotalEuroPriceOfAllPhotos() uitvoerd krijg je de som van alle
prijzen van de foto's.
`, () => {

});


test(`
Wanneer je photoStore.applyCurrencyChange() uitvoerd wordt een property convertedPrice
toegevoegd aan alle foto's. De waarde hiervan is gelijk aan de euro prijs maal de waarde
van de geselecteerde currency.`, () => {

});

test(`
Wanneer je photoStore.applySortBy() uitvoerd moeten alle foto's gesorteerd worden van laag naar hoog
afhankelijk van de waarde van selectedSortBy. Deze kan title of priceInEuro zijn.
`, () => {

});


test(`
Wanneer je photoStore.applyPhotographerFilter() uitvoerd wordt this.photos gefiltered met alle foto's
waar fotograaf gelijk is aan de geselecteerde fotograaf in userInput.selectedPhotographer.
Wanneer userInput.selectedPhotographer gelijk is aan 'all', moeten alle foto's getoond worden`, () => {

});

test(`
Wanneer photoStore.applyAll() wordt uitgevoerd moeten this.photos gereset worden naar de
originele waarde. Daarna moeten al de volgende functies uitgevoerd worden: sort, currencyChange, applyPhotographerFilter.
`, () => {

});

test(`
Refactor nu de applyCurrencyChange methode, zodanig dat deze de changerates gaat ophalen via een API.
(https://exchangeratesapi.io/latest)
`, () => {

});
