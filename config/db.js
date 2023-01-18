//URI String - uniform resource identifier a way to to distingush resources from one another 

// creating a base name for mongodb
const mongooseBaseName = 'create-read'


const database = {
	development: `mongodb://localhost/${mongooseBaseName}-development`,
	test: `mongodb://localhost/${mongooseBaseName}-test`,
}


const localDb = process.env.TESTENV ? database.test : database.development

const currentDb = process.env.DB_URI || localDb

module.exports = currentDb