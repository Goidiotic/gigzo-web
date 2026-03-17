import { jwtDecode } from "jwt-decode";

export default function appAccess () {
    const token = localStorage.getItem("token");
    
    if (!token) return null;

    try {
    const decoded = jwtDecode(token);
    const appAccess = decoded.appAccess;
    return appAccess;
    } catch (err) {
    return null;
    }
}