function updateCart(shopList, shopListPrice) {
  var elem = document.getElementById(shopList);
  elem.style.display = 'flex';
  var elem = document.getElementById(shopListPrice);
  elem.style.display = 'block';

  var price = document.getElementById('priceTotal');
  if (shopList == 'shopList1'){
    price.innerHTML = "Suma celkom..............................................15.00€";
  }
  else{
    price.innerHTML = "Suma celkom...............................................7.50€";
  }
}

function updateCount(){
  var elem = document.getElementById('pizzaCount');
  elem.innerHTML = "2";
  var elem = document.getElementById('priceTotal');
  elem.innerHTML = "Suma celkom.............................................22.50€";
  var elem = document.getElementById('shopList2Price');
  elem.innerHTML = "...........................................................15.00€";
}

function updateCheckBox(check){ //fun4
  var elem = document.getElementById(check);
  if(check == 'check1' || check == 'check2'){
    elem.style.backgroundColor = 'black';
  }
  else if(check == 'tip' || check == 'tipCheck1' || check == 'tipCheck2' || check == 'tipCheck'){
    elem.style.backgroundColor = '#FFC95C';
  }
}

function popUp(){
  var elem = document.getElementById('popup');
  elem.style.display = 'block';
}