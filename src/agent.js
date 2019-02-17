const superagent = require('superagent');

const API_ROOT = 'http://meandemo-env.2ammmpcvep.ap-southeast-1.elasticbeanstalk.com';

const responseBody = res => res.body

const handleError = err => {
    //console.log(err.message);
    //console.log(err.status);
    switch (err.status) {
        case 401:
            alert('Incorrect email or password!')
            return;
        case 500:
            alert('Email has been signed up!')
    }
}

const requests = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody),
    del: url =>
        superagent.del(`${API_ROOT}${url}`).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`).send(body).then(responseBody).catch(handleError),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`).send(body).then(responseBody)
};

const User = {
    signUp: (email, password) =>
        requests.post('/api/user/signup', { email, password }),
    signIn: (email, password) =>
        requests.post('/api/user/login', { email, password }),
}

/*const Auth = {
    login: (username, password) =>
        requests.post('/users/login', { user: { username, password } }),
    register: (username, email, password) =>
        requests.post('/users', { user: { username, email, password } }),
    getUser: id =>
        requests.post('/users/get', { user: { id } }),
    save: user =>
        requests.put('/users', { user })
}

const Profile = {
    get: (id, username) =>
        requests.post('/profiles', { user1: { id }, user2: { username } })
}


const Articles = {
    all: () =>
        requests.get(`/articles/get?*`),
    del: articleId =>
        requests.del(`/articles?articleid=${articleId}`),
    get: articleId =>
        requests.get(`/articles/get?articleid=${articleId}`),
    new: (id, article) =>
        requests.post(`/articles`, { user: { id }, article }),
    update: (article) =>
        requests.put(`/articles`, { article }),
    getTags: () =>
        requests.get(`/tags`),
    getByTag: (tag) =>
        requests.get(`/articles/get?tag=${tag}`)

};*/

export default {
    User,
}