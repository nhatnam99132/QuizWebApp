import Api from "../../api"

export default {
    login(credentials) {
        return Api().post('api/user/login', {
            email: credentials.username,
            password: credentials.password
        });
    },
    register() {
        return Api().post('api/user/register');
    },
    logout(credentials) {
        const config = {
            headers: { Authorization: `Bearer ${credentials.token}` }
        };
        return Api().post('api/user/logout', {}, config);
    }
};