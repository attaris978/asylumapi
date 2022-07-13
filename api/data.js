const asylumOffice = () => ["zar", "zbo", "zch", "zhn", "zla", "zmi", "znk", "zny", "zol", "zsf"][Math.floor(Math.random() * 10)];
const citizenship = () => ["Afghanistan", "Albania", "Algeria", "Angola"][Math.floor(Math.random() * 4)];
const raceOrEthnicity = () => ["Armenian", "Chinese", "Albanian"][Math.floor(Math.random() * 3)];
const caseOutcome = () => ["Deny/Referral", "Grant", "Admin Close/Dismissal"][Math.floor(Math.random() * 3)];
const completion = () => new Date(Date.now() - Math.random() * 36 * 1000 * 60 * 60 * 24 * 30).toISOString();
const currentDate = () => new Date(Date.now()).toISOString();

const generateData = (numberOfEntries = 20) => Array.from({length: numberOfEntries}, (v,i) => {
  return {
    "caseId" : i,
    "asylumOffice": asylumOffice(),
    "citizenship" : citizenship(), 
    "raceOrEthnicity" : raceOrEthnicity(),
    "caseOutcome" : caseOutcome(),
    "completion" : completion(),
    "currentDate" : currentDate()
  }
})

module.exports = generateData;