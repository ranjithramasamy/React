const API_BASE_URL = 'http://localhost:8080';
const GET_JOB_TYPES_URL = API_BASE_URL + '/v1/api/jobtypes';
const GET_SKILLS_URL = API_BASE_URL + '/v1/api/skills';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response =>
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

function getJobTypes() {
    return request({
        url: GET_JOB_TYPES_URL,
        method: 'GET'
    });
}

function getSkills() {
    return request({
        url: GET_SKILLS_URL,
        method: 'GET'
    });
}

export const dataService = {
    getJobTypes: getJobTypes,
    getSkills: getSkills
};