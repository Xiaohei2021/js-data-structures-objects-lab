// Write your solution in this file!
const driver = { leon: 'silver' , mom: 'black'};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
    driver[key] = value;
    return driver;
  }

function deleteFromDriverByKey(driver, key){
    const newList = Object.assign({}, driver);
    delete newList[key];
    return newList;
}

function destructivelyDeleteFromDriverByKey(drive, key){
    delete driver[key];
    return driver;
}