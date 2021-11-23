// Code your solution in this file!
const feet = 264;
const hq = 42;


function distanceFromHqInBlocks(location){
   if(location > hq){
return location - hq;
   } 
   else if(location < hq){
       return hq - location;
   }
    
}

distanceFromHqInBlocks(50);

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * feet;
}

function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(destination - start);
    return distance * feet;
}

function calculatesFarePrice(start, destination) {
        
    let traveled = distanceTravelledInFeet(start, destination);

    if (traveled <= 400){
        return 0;
    } else if (traveled > 400 && traveled <= 2000){
        return (traveled - 400) * .02;
    }
    else if ( traveled > 2000 && traveled < 2500){
        return 25;
    }
    else if (traveled > 2500){
        return 'cannot travel that far';
    }

}


