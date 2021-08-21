// memory price update
function updateMemoryButton(isFree) {
 const memoryPrice = document.getElementById('memory-price');
 const memoryPriceText = memoryPrice.innerText;
 if (isFree) {
  memoryPrice.innerText = parseInt(memoryPriceText) * 0;
 }
 else if (memoryPriceText < 180) {
  memoryPrice.innerText = parseInt(memoryPriceText) + 180;
 }
 // calculate total price
 calculateTotalPrice();
};
// storage price update
function updateStoragePrice(isFree) {
 const storagePrice = document.getElementById('storage-price');
 const storagePriceAmount = storagePrice.innerText;
 if (isFree) {
  storagePrice.innerText = parseInt(storagePriceAmount) * 0;
 }
 else if (storagePriceAmount < 100) {
  storagePrice.innerText = parseInt(storagePriceAmount) + 100;
  if (storagePriceAmount >= 100 && storagePriceAmount <= 180) {
   storagePrice.innerText = parseInt(storagePriceAmount) + 180;
  }
 }
 // calculate total price
 calculateTotalPrice();
};
// delivery option
function updateDeliveryAmount(isFree) {
 const deliveryPrice = document.getElementById('delivery-price');
 const deliveryPriceAmount = deliveryPrice.innerText;
 if (isFree) {
  deliveryPrice.innerText = parseInt(deliveryPriceAmount) * 0;
 }
 else if (deliveryPriceAmount < 20) {
  deliveryPrice.innerText = parseInt(deliveryPriceAmount) + 20;
 }
 // calculate total price
 calculateTotalPrice();
};
// calculation of total price
function getTotalValue(service) {
 const servicePrice = document.getElementById(service + '-price');
 const servicePriceText = parseInt(servicePrice.innerText);
 return servicePriceText;
}

function calculateTotalPrice(isCorrectPromo) {
 const memoryPriceTotal = getTotalValue('memory') + 1299;
 const storagePriceTotal = getTotalValue('storage');
 const deliveryPriceTotal = getTotalValue('delivery');
 const totalPrice = memoryPriceTotal + storagePriceTotal + deliveryPriceTotal;

 // update total price
 document.getElementById('total-cost').innerText = totalPrice;
 // // update total
 document.getElementById('total-amount-price').innerText = totalPrice;
};
// promo code apply
document.getElementById('apply-button').addEventListener('click', function () {
 const promoInput = document.getElementById('promo-input');
 const totalPrice = document.getElementById('total-amount-price');
 const totalPriceAmount = totalPrice.innerText;
 const promoCode = promoInput.value;
 if (promoCode == 'stevekaku') {
  totalPrice.innerText = parseInt(totalPriceAmount) * 0.8
 }
 promoInput.value = '';
});

// 8gb memory
document.getElementById('8gb-memory-button').addEventListener('click', function () {
 updateMemoryButton(true);
});
// 16 gb memory
document.getElementById('16gb-memory-button').addEventListener('click', function () {
 updateMemoryButton(false)
});
// 256 gb storage
document.getElementById('256gb-storage').addEventListener('click', function () {
 updateStoragePrice(true);
});
// 512 GB storage
document.getElementById('512gb-storage').addEventListener('click', function () {
 updateStoragePrice(false);
});
// 1 TB storage
document.getElementById('1tb-storage').addEventListener('click', function () {
 updateStoragePrice(false);
});
// free delivery
document.getElementById('free-delivery').addEventListener('click', function () {
 updateDeliveryAmount(true);
});
// fast delivery 
document.getElementById('fast-delivery').addEventListener('click', function () {
 updateDeliveryAmount(false);
});
