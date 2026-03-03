// API utility functions for backend communication

const getBackendUrl = () => {
    return process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
};

const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
    };
};

export const api = {
    // Auth endpoints
    auth: {
        login: async (email, password) => {
            const response = await fetch(`${getBackendUrl()}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            return response.json();
        },
        signup: async (fullName, email, password) => {
            const response = await fetch(`${getBackendUrl()}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, password }),
            });
            return response.json();
        },
        verify: async () => {
            const response = await fetch(`${getBackendUrl()}/api/auth/verify`, {
                headers: getAuthHeaders(),
            });
            return response.json();
        },
    },
    // Contact endpoints
    contact: {
        submit: async (formData) => {
            const response = await fetch(`${getBackendUrl()}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            return response.json();
        },
        getAll: async (page = 1, limit = 10, search = '') => {
            const url = new URL(`${getBackendUrl()}/api/contact`);
            url.searchParams.append('page', page);
            url.searchParams.append('limit', limit);
            if (search) url.searchParams.append('search', search);
            
            const response = await fetch(url, {
                headers: getAuthHeaders(),
            });
            return response.json();
        },
        getOne: async (id) => {
            const response = await fetch(`${getBackendUrl()}/api/contact/${id}`, {
                headers: getAuthHeaders(),
            });
            return response.json();
        },
        delete: async (id) => {
            const response = await fetch(`${getBackendUrl()}/api/contact/${id}`, {
                method: 'DELETE',
                headers: getAuthHeaders(),
            });
            return response.json();
        },
    },
};

