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
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000){
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500){
    return 25;
  }
  else {
    return 'cannot travel that far';
  } 
}
