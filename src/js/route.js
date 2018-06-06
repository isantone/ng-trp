let lkVisibility = false;

export function getLkVisibility() {
  return lkVisibility;
}

export function init() {
  /**
   * Создание мультимаршрута.
   * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
   */
  const multiRoute = new ymaps.multiRouter.MultiRoute({
    referencePoints: getRouteReferencePoints(),
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

  const buttonEditor = new ymaps.control.Button({
    data: { content: 'Режим редактирования' },
  });

  const buttonProfile = new ymaps.control.Button({
    data: { content: 'Личный кабинет' },
  });

  buttonEditor.events.add('select', () => {
    /**
     * Включение режима редактирования.
     * В качестве опций может быть передан объект с полями:
     * addWayPoints - разрешает добавление новых путевых точек при клике на карту. Значение по умолчанию: false.
     * dragWayPoints - разрешает перетаскивание уже существующих путевых точек. Значение по умолчанию: true.
     * removeWayPoints - разрешает удаление путевых точек при двойном клике по ним. Значение по умолчанию: false.
     * dragViaPoints - разрешает перетаскивание уже существующих транзитных точек. Значение по умолчанию: true.
     * removeViaPoints - разрешает удаление транзитных точек при двойном клике по ним. Значение по умолчанию: true.
     * addMidPoints - разрешает добавление промежуточных транзитных или путевых точек посредством перетаскивания маркера, появляющегося при наведении курсора мыши на активный маршрут. Тип добавляемых точек задается опцией midPointsType. Значение по умолчанию: true
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml#editor
     */
    multiRoute.editor.start({
      addWayPoints: true,
      removeWayPoints: true,
    });
  });

  buttonEditor.events.add('deselect', () => {
    // Выключение режима редактирования.
    multiRoute.editor.stop();
  });

  // Создаем карту с добавленной на нее кнопкой.
  const myMap = new ymaps.Map('map', {
    center: [56.399625, 36.71120],
    zoom: 7,
    controls: [buttonEditor],
  }, {
    buttonMaxWidth: 300,
  });

  myMap.controls.add(buttonProfile, {
    float: 'right',
  });

  // Добавляем мультимаршрут на карту.
  // myMap.geoObjects.add(multiRoute);

  buttonProfile.events
    .add(
      'press',
      lkClickHandler,
    );

  function lkClickHandler(mouseEv) {
    // document.getElementById('lk').classList.toggle('hidden');
    lkVisibility = !lkVisibility;
    console.log(lkVisibility);
  }
}

function getRouteReferencePoints() {
  return ['Казань', 'Ижевск', 'Пермь', 'Екатеринбург', 'Челябинск'];
}
// ymaps.ready(init);
