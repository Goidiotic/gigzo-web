const handleApiResponse = (res, navigate = null) =>{

    const { statusCode, message, ...data } = res;

        switch (statusCode) {
            // Success
            case 200:
                return data;

            // API Request Validation
            case 301: // Invalid Request
                console.log("Invalid request");
                return null;

            // Account Validation
            case 320: // Session expired
                localStorage.removeItem('token'); // Or whatever you're storing
                if (navigate) navigate('/login');
                return null;

            case 321: // User not found
                localStorage.removeItem('token');
                if (navigate) navigate('/login');
                return null;

            case 322: // Suspended
                localStorage.removeItem('token');
                if (navigate) navigate('/login');
                return null;

            // Token validation codes
            case 451: // Invalid token
                localStorage.removeItem('token');
                if (navigate) navigate('/login');
                return null;
            case 452: // token format invalid
                localStorage.removeItem('token');
                if (navigate) navigate('/login');
                return null;
            case 453: // JWT Token Error
                localStorage.removeItem('token');
                if (navigate) navigate('/login');
                return null;
            
            // Server response
            case 500:
                console.log(message)
                return null;
            default:
                console.log(message)
                return null;
    }

}

export default handleApiResponse;