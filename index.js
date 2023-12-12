// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
  const scuber = 42;
    if (pickupLocation > scuber){
      return pickupLocation - scuber;
    } else {
      return scuber - pickupLocation;
    }
}

function distanceFromHqInFeet(pickupLocation){
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination){
  return destination > start ? (destination - start) * 264 : (start - destination) * 264;
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  let fare;
  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance < 2000){
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500){
    fare = 25;
  }
  else {
    fare= 'cannot travel that far';
  } 
  return fare;
}
