const pies = [//PIE OBJECT ARRAY
    {
      name: 'Dutch Apple Pie',
      ingredients: 'apples,sugar,butter,nutmeg,dutch people',
      bakeTemp: 5000,
      drinkPairing: 'Earl Grey Tea',
      imageUrl: 'https://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/2013/09/30859_Recipeimage_620x413_dutch_apple_pie.jpg',
      instructor: 'Zoe',
      iceCream: 'Vanilla',
    },
    {
      name: 'Berry Pie',
      ingredients: 'berries',
      bakeTemp: 400,
      drinkPairing: 'wine',
      imageUrl: 'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
      instructor: 'Zoe',
      iceCream: 'banana',
    },
    {
      name: 'Pumpkin Pie',
      ingredients: 'pumpkins, nutmeg, cinnamon, graham crackers, pilgrims',
      bakeTemp: 42,
      drinkPairing: 'egg nog',
      imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
      instructor: 'Michael',
      iceCream: 'Vanilla',
    },
    {
      name: 'Shoo Fly Pie',
      ingredients: 'Molasses, nutmeg, cinnamon, butter, graham cracker ',
      bakeTemp: 1234,
      drinkPairing: 'Apple Cider',
      imageUrl: 'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
      instructor: 'Michael',
      iceCream: 'Coffee',
    },
    {
      name: 'Pecan Pie',
      ingredients: 'Pecans, sugar, butter, flour',
      bakeTemp: 5000,
      drinkPairing: 'Milk',
      imageUrl: 'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
      instructor: 'Saul',
      iceCream: 'Vanilla',
    },
    {
      name:'Keylime Pie',
      ingredients: 'lemons, sugar, butter, flour',
      bakeTemp: 5000,
      drinkPairing: 'Water',
      imageUrl: 'https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0020/img38l.jpg',
      instructor: 'Saul',
      iceCream: 'none',
    },
  ];

const init = () => {//INITIALIZATION FUNCTION(
    buttonEvents();
    pieLooper();
};

const print = (id, message) => {//PRINTS TO DOM BY ELEMENT ID
    const selectedDiv = document.getElementById(id);
    selectedDiv.innerHTML = message;
  };

  const pieLooper = () =>{//LOOPS THROUGH PIES (FOR EACH)//ASSIGNS VALUES OF PIES OBJECT TO PIESTRING//PRINT(ID, PIESTRING)
      let pieString = '';
      pies.forEach ((pie) => {
        pieString += `<div class = "card">`;
        pieString +=    `<h2>Name: ${pie.name}</h2>`;
        pieString +=    `<img src="${pie.imageUrl}">`;
        pieString +=    `<p class = "firstP">Ingredients: ${pie.ingredients}</p>`;
        pieString +=    `<p>Bake Temp: ${pie.bakeTemp} Degrees</p>`;
        pieString +=    `<p>Drink Pairing: ${pie.drinkPairing}</p>`;
        pieString +=    `<p>Ice Cream Pairing${pie.iceCream}</p>`;
        pieString +=    `<p>This is ${pie.instructor}'s favorite pie!</p>`;
        pieString += `</div>`;
      })
      print('testDivId', pieString);
  };

  const buttonClick = () => {
    console.log('butts');
  };

  const buttonEvents = () => {
    document.getElementById('Zoe').addEventListener('click', buttonClick)
  };

  init();//INITIALIZATION