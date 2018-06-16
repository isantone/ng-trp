import { Component, OnInit } from '@angular/core';

import { RecommendationsService } from '../services/recommendations.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

// import { myMap } from '../../assets/route.js';

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
        console.log(recommendations);
        this.currentRecommendations = recommendations;
        // this.recommendedCities = this.currentRecommendations.cityPrefs;
        if (this.currentRecommendations.cityPrefs) {
          this.citiesInRoute = this.currentRecommendations.cityPrefs.slice(0, 5);
          this.citiesOutOfRoute = this.currentRecommendations.cityPrefs.slice(5);
        }

        // if (this.recommendedCities) {
        //   this.addMultiRoute(this.formRecommendedCities(this.recommendedCities));
        // }
        if (this.citiesInRoute) {
          this.addMultiRoute(this.formRecommendedCities(this.citiesInRoute));
        }
      });

    this.dragula
      .drop
        .subscribe(value => {
          console.log(value);
        })
        // .then(this.addMultiRoute(this.formRecommendedCities(this.recommendedCities)))
        ;

    this.dragula
      .dragend
        .subscribe(value => {
          console.warn(this.recommendedCities);

          // this.addMultiRoute(this.formRecommendedCities(this.recommendedCities));
        });

  }

  rebuildRoute() {
    // this.addMultiRoute(this.formRecommendedCities(this.recommendedCities));
    this.addMultiRoute(this.formRecommendedCities(this.citiesInRoute));
  }

  formRecommendedCities(recommendedCities: Array<any>): Array<string> {
    const recCitiesArr: Array<string> = [];

    // this.citiesInRoute = [];
    // this.citiesOutOfRoute = [];

    // console.warn('RC', recommendedCities);

    // recommendedCities.forEach((element, index) => {
    //   if (index < 5) {
    //     recCitiesArr.push(element.city.name);

    //     this.citiesInRoute.push(element);
    //   } else {
    //     this.citiesOutOfRoute.push(element);
    //   }
    // });

    recommendedCities.forEach((element) => recCitiesArr.push(element.city.name));

    console.warn('RCA', recCitiesArr);
    return recCitiesArr;
  }

  addMultiRoute(routeReferencePoints: Array<string>) {
    this.showLoading = true;

    setTimeout(
      () => this.showLoading = false,
      5000
    );

    const routeGeoObjects = new ymaps.GeoObjectCollection({});
    routeGeoObjects.removeAll();

    // if (!myMap.geoObjects.get('optim-route')) {
      const multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: routeReferencePoints,
        // referencePoints: getRouteReferencePoints(),
      }, {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true,
        // Тип промежуточных точек, которые могут быть добавлены при редактировании.
        editorMidPointsType: 'via',
        // В режиме добавления новых путевых точек запрещаем ставить точки поверх объектов карты.
        editorDrawOver: false,
        //   отключить обновление маршрута во время перетаскивания опорных точек
        preventDragUpdate: true,
      });

      myMap.geoObjects.removeAll();

      // myMap.geoObjects.add(multiRoute);
      routeGeoObjects.add(multiRoute);
      myMap.geoObjects.add(routeGeoObjects);
      // myMap.geoObjects.set(0, multiRoute);
      console.log(myMap);
      // console.warn(myMap.geoObjects);

    // }

    // if (!this.buttonAdded) {
    //   const buttonEditor = new ymaps.control.Button({
    //     data: { content: 'Режим редактирования' },
    //   });

    //   buttonEditor.events.add('select', () => {
    //     /**
    //      * Включение режима редактирования.
    //      * В качестве опций может быть передан объект с полями:
    //      * addWayPoints - разрешает добавление новых путевых точек при клике на карту. Значение по умолчанию: false.
    //      * dragWayPoints - разрешает перетаскивание уже существующих путевых точек. Значение по умолчанию: true.
    //      * removeWayPoints - разрешает удаление путевых точек при двойном клике по ним. Значение по умолчанию: false.
    //      * dragViaPoints - разрешает перетаскивание уже существующих транзитных точек. Значение по умолчанию: true.
    //      * removeViaPoints - разрешает удаление транзитных точек при двойном клике по ним. Значение по умолчанию: true.
    //      * addMidPoints - разрешает добавление промежуточных транзитных или путевых точек посредством перетаскивания маркера,
    //      * появляющегося при наведении курсора мыши на активный маршрут. Тип добавляемых точек задается опцией midPointsType.
    //      * Значение по умолчанию: true
    //      * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml#editor
    //      */
    //     multiRoute.editor.start({
    //       addWayPoints: true,
    //       removeWayPoints: true,
    //     });
    //   });

    //   buttonEditor.events.add('deselect', () => {
    //     // Выключение режима редактирования.
    //     multiRoute.editor.stop();
    //   });

    //   myMap.controls.add(buttonEditor);
    //   this.buttonAdded = true;
    // }


    // myMap.controls = [buttonEditor];
  }

}
