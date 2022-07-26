const {regions}  = require('./filterConstants.js');


const years = [2016,2017,2018,2019,2020,2021];


const countryYear = (year) => {
    return {
        year,
        grant: Math.floor(Math.random() * 300),
        deny: Math.floor(Math.random() * 300),
        dismiss: Math.floor(Math.random() * 300),
    }
};

const countryMonths = (years) => {
    let monthArray = [];
    years.forEach( year => monthArray = [...monthArray, ...Array.from({length: 12}, () => {
        return {
            cYear: year,
    fYear: year,
    grant: Math.floor(Math.random() * 300),
    deny: Math.floor(Math.random() * 300),
    dismiss: Math.floor(Math.random() * 300),
        };
    })]);
    return monthArray;
};

const generatedSummary = regions.map( region => {
    return {
        country: region.territory,
        year: {
            calendar: years.map( year => countryYear(year)),
            fiscal: years.map( year => countryYear(year)),
        },
        month: countryMonths(years)
    }
});

module.exports = generatedSummary;