const fileName = () => `Doc_${Math.floor(Math.random()*12000)}`;
const fileType = () => ['PDF','DOCX','XLS','BMP','JPG'][Math.floor(Math.random()*5)];
const fileSize = () => `${Math.floor(Math.random()*20)}.${Math.floor(Math.random()*10)}MB`;
const dateUploaded = () => `${2019 + Math.floor(Math.random()*3)}-${1+Math.floor(Math.random()*11)}-${1+Math.floor(Math.random()*28)}`;
const uploadedBy = ['Me', 'You', 'Somebody@motivemetrics.com', 'thatguy@motivemetrics.com', 'sheila@thatcompany.com'][Math.floor(Math.random()*5)];
const agency = ['TheAgency', 'The Other Agency', 'Yet another agency', 'Which agency?'][Math.floor(Math.random()*4)];

const randoList = Array.from({length: 30}, (ea,ind) => (
    {
        id: ind,
        fileName: fileName(),
        fileType: fileType(),
        fileSize: fileSize(),
        dateUploaded: dateUploaded(),
        uploadedBy: uploadedBy(),
        agency: agency(),
    }
));

module.exports = randoList;