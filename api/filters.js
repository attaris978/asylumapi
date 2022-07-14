const filter = (req, cases) => {
    console.log(cases);
    if (req.query?.asylumOffice) {
        let offices = req.query.asylumOffice.split(",");
        cases = cases.filter(entry => offices.includes(entry.asylumOffice))
    }
    if (req.query?.citizenship) {
        let citizenships = req.query.citizenship.split(",");
        cases = cases.filter(entry => citizenships.includes(entry.citizenship))
    }
    if (req.query?.caseOutcome) {
        let outcomes = req.query.caseOutcome.split(",");
        cases = cases.filter(entry => outcomes.includes(entry.caseOutcome))
    }
        
    return cases;
}
 
module.exports = filter;