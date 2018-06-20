import { Component, OnInit } from '@angular/core';

import { RecommendationsService } from '../services/recommendations.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

declare const ymaps;
declare const myMap;

@Component({
  selector: 'trp-recommendation-results',
  templateUrl: './recommendation-results.component.html',
  styleUrls: ['./recommendation-results.component.scss'],
})
export class RecommendationResultsComponent implements OnInit {

  constructor(
    private recommendations: RecommendationsService,
    private dragula: DragulaService
  ) {
    this.dragula.setOptions('bag-recommendations', {
      removeOnSpill: true
    });
  }

  currentRecommendations: any;

  recommendedCities: Array<object>;

  citiesInRoute: Array<object>;
  citiesOutOfRoute: Array<object>;

  buttonAdded: boolean;

  showLoading = false;

  msg;

  ngOnInit() {
    this.recommendations.currentRecommendations.subscribe(
      recommendations => {
        this.currentRecommendations = recommendations;

        if (this.currentRecommendations.cityPrefs) {
          this.citiesInRoute = this.currentRecommendations.cityPrefs.slice(0, 5);
          this.citiesOutOfRoute = this.currentRecommendations.cityPrefs.slice(5);
        }

        if (this.citiesInRoute) {
          this.addMultiRoute(this.formRecommendedCities(this.citiesInRoute));
        }
      });

  }

  rebuildRoute() {

    this.addMultiRoute(this.formRecommendedCities(this.citiesInRoute));
  }

  formRecommendedCities(recommendedCities: Array<any>): Array<string> {
    const recCitiesArr: Array<string> = [];

    recommendedCities.forEach((element) => recCitiesArr.push(element.city.name));

    return recCitiesArr;
  }

  addMultiRoute(routeReferencePoints: Array<string>) {
    this.showLoading = true;

    setTimeout(
      () => this.showLoading = false,
      7000
    );

    myMap.geoObjects.removeAll();

    const multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: routeReferencePoints,
    }, {
      boundsAutoApply: true,
      editorMidPointsType: 'via',
      editorDrawOver: false,
      preventDragUpdate: true,
    });

    multiRoute.model.events
      .add('requestsuccess', (event) => {
          const routes = event.get('target').getRoutes();

          console.log('Найдено маршрутов: ' + routes.length);

          for (let i = 0, l = routes.length; i < l; i++) {
            console.log('Длина маршрута ' + (i + 1) + ': ' + routes[i].properties.get('distance').text);
          }

          this.showLoading = false;
      });

    myMap.geoObjects.add(multiRoute);

      const buttonEditor = new ymaps.control.Button({
        data: { content: 'Режим редактирования' },
      });

      buttonEditor.events.add('select', () => {
        multiRoute.editor.start({
          // addWayPoints: true,
          removeWayPoints: true,
        });
      });

      buttonEditor.events.add('deselect', () => {
        // Выключение режима редактирования.
        multiRoute.editor.stop();
      });
  }

}
