import { jwtDecode } from "jwt-decode";

export default function userType () {
    const token = localStorage.getItem("token");
    
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        const userType = decoded.userType;
        return userType;
    } catch (err) {
        return null;
    }
}