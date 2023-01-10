// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42) ; 
}  

function distanceFromHqInFeet(blocks) {
    return 264 * distanceFromHqInBlocks(blocks);   
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(264 * (destination - start));
}

function calculatesFarePrice(start, destination) {
    let price;
    let distance = Math.abs(264 * (destination - start))
    if ( distance <= 400) {
        return price = 0;
    } else if ( distance > 400 && distance < 2000) {
        return price = (distance - 400) * 0.02;
    } else if ( distance > 2000 && distance < 2500) {
        return price = 25
    } else if ( distance > 2500) {
        return "cannot travel that far";
    }   
}