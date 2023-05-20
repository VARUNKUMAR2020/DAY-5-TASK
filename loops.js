const jsonData = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
};

// Using for...in loop to iterate over object properties
for (let key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
        console.log(key, jsonData[key]);
    }
}

// Using for...of loop to iterate over object values
for (let value of Object.values(jsonData)) {
    console.log(value);
}

// Convert the JSON object to an array
const jsonArray = Object.entries(jsonData);

// Using for loop to iterate over the array
for (let i = 0; i < jsonArray.length; i++) {
    let [key, value] = jsonArray[i];
    console.log(key, value);
}

// Using forEach loop to iterate over the array
jsonArray.forEach(([key, value]) => {
    console.log(key, value);
});