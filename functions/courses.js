const formattedReturn = require('./helpers/formattedReturn');
const getCourses = require('./helpers/getCourses');
const createCourse = require('./helpers/createCourse');
const deleteCourse = require('./helpers/deleteCourse');
const updateCourse = require('./helpers/updateCourse');

// handler is my serverless function
//a serverless fct must return a status and some data

exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getCourses(event);
    } else if (event.httpMethod === 'POST') {
        return await createCourse(event);
    } else if (event.httpMethod === 'PUT') {
        return await updateCourse(event);
    } else if (event.httpMethod === 'DELETE') {
        return await deleteCourse(event);
    } else {
        return formattedReturn(405, {});
    }
};