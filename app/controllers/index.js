function transform(model){
var carObject = model.toJSON();
var output =
{
"title" : carObject.model + " by " + carObject.make,
"id" :model.cid
};
return output;
}
function filter(collection)
{
return collection.where(
{
make: "Honda"
}
);
}
$.mainWindow.addEventListener("close", function()
{
$.destroy();
});
$.mainWindow.addEventListener("open", function(){
Alloy.Collections.cars.reset(
[
{
"make":"Honda",
"model":"Civic"
},
{
"make":"Honda",
"model":"Accord"
},
{
"make":"Ford",
"model":"Escape"
},
{
"make":"Ford",
"model":"Mustang"
},
{
"make":"Nissan",
"model":"Altima"
}
]
);
});
$.mainWindow.open();