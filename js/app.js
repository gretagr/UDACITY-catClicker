let model = {
  currentCat: null,
  cats: [
    { count: 0,
    name: 'Joseph',
    image: 'img/joseph.jpg'},

    { count: 0,
    name: 'Luis',
    image: 'img/luis.jpg'},

    { count: 0,
    name: 'Martha',
    image: 'img/martha.jpg'},

    { count: 0,
    name: 'Leo',
    image: 'img/leo.jpg'},

    { count: 0,
    name: 'Leila',
    image: 'img/leila.jpg'},

    { count: 0,
    name: 'Berta',
    image: 'img/berta.jpg'},

    { count: 0,
    name: 'Jasper',
    image: 'img/jasper.jpg'}
  ]
};

let controller = {
  init: function () {
    model.currentCat = model.cats[0];

    catListView.init();
    catView.init();
  },

  setCurrentCat: function (cat) {
    model.currentCat = cat;
  },

  getCurrentCat: function () {
    return model.currentCat;
  },

  getCats: function () {
    return model.cats;
  },

  incrementCounter: function () {
    model.currentCat.count++;
    catView.render();
  }
};

let catView = {
  init: function () {
    this.catText = document.querySelector('.cat-text');
    this.catImage = document.querySelector('.cat-image');
    this.catCounter = document.querySelector('.counter');

    this.catImage.addEventListener('click', function (){
      controller.incrementCounter();
    });
    this.render();
  },

  render: function () {
    let currentCat = controller.getCurrentCat();
    this.catCounter.innerText = `Name: ${currentCat.name},  Clicks: ${currentCat.count}`;
    this.catImage.src = currentCat.image;
  }
};

let catListView = {
  init: function() {

    this.catList = document.querySelector('.cat-list');
    this.render();
  },

  render: function () {
    let cat, listElement;
    let cats = controller.getCats();

    this.catList.innerHTML = '';
    for (let i = 0; i < cats.length; i++) {
      cat = cats[i];

      listElement = document.createElement('li');
      listElement.innerText = cat.name;

      listElement.addEventListener('click', function (catCopy) {
        return function (){
          controller.setCurrentCat(catCopy);
          catView.render();
        };
      }(cat));
      this.catList.appendChild(listElement);
    }
  }
};

controller.init();
