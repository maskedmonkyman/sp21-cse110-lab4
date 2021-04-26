let statistics = 
{
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const property in statistics)
{
    const propertyString = `${property}: ${statistics[property]}`;
    if (property[0] == "r")
        console.log(propertyString);
    else if(statistics[property] % 2 == 1)
        console.log(propertyString);
}