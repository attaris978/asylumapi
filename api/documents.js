const fileName = () => `Doc_${Math.floor(Math.random()*12000)}`;
const fileType = () => ['PDF','DOCX','XLS','BMP','JPG'][Math.floor(Math.random()*5)];
const fileSize = () => Math.floor(Math.random()*20000);
const dateUploaded = () => `${2019 + Math.floor(Math.random()*3)}-${1+Math.floor(Math.random()*11)}-${1+Math.floor(Math.random()*28)}`;
// const uploadedBy = () => ['Me', 'You', 'Somebody@motivemetrics.com', 'thatguy@motivemetrics.com', 'sheila@thatcompany.com'][Math.floor(Math.random()*5)];
// const agency = () => ['TheAgency', 'The Other Agency', 'Yet another agency', 'Which agency?'][Math.floor(Math.random()*4)];

const randoList = Array.from({length: 30}, (ea,ind) => (
    {
        schema_version: 0,
        uuid: ind.toString(),
        created_at: dateUploaded(),
        updated_at: dateUploaded(),
        name: fileName(),
        size: fileSize(),
        format: fileType(),
        s3_key: "s3Key",
        owner_user_id: "Owner User Id",
        owner_user_email: "Owner Email",
        owner_account_id: 0,
        owner_account_name: "Owner Account Name",
        space_id: "space id",
        presigned_url: "presigned URL",
    }
));

module.exports = randoList;