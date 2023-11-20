const Endpoints = {
	AUTH: {
		LOGIN: 'http://localhost:8000/api/auth/jwt/create/',
		REFRESH: 'http://localhost:8000/api/auth/jwt/refresh/',
		LOGOUT: '/',
		PROFILE: 'http://localhost:8000/api/profile/',
		PATCH: 'http://localhost:8000/api/profile/',
		VERIFY: 'http://localhost:8000/api/auth/jwt/verify/'
	}
}

export default Endpoints
