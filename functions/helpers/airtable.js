// TODO: create Airtable configuration

//configuration for airtable

//   http://localhost:8888/.netlify/functions/courses

require('dotenv').config()

const Airtable = require('airtable')

//we configure airtable with the api key, then base then the table we want to work with
const base = new Airtable({apikey: process.env.AIRTABLE_API_KEY})
    .base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME)

module.exports = {table}