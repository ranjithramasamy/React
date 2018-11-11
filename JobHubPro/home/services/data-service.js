const API_BASE_URL = 'http://localhost:8080/v1/api';
const GET_JOB_TYPES_URL = API_BASE_URL + '/jobtypes';
const GET_SKILLS_URL = API_BASE_URL + '/skills';
const SEARCH_JOBS_URL = API_BASE_URL + '/search';

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

function searchJobs(criteria) {
    let qParam = "?keyword=" + (criteria.keyword || "") + "&skills=" + (criteria.skills || "")
        + "&availability=" + (criteria.availability || "") + "&jobType=" + (criteria.jobType || "")
        + "&sortby=" + (criteria.sortby || "");

    return request({
        url: SEARCH_JOBS_URL + qParam,
        method: 'GET'
    });
}

export const dataService = {
    getJobTypes: getJobTypes,
    getSkills: getSkills,
    searchJobs: searchJobs
};