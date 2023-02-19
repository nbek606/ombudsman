export default function ({ $axios, store }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        baseURL: 'http://localhost:88/',
        withCredentials: true, // required to handle the CSRF token
      });

    // Inject to context as $api
    inject('api', api)
}
