import { jwtDecode } from "jwt-decode";

export default function checkAccess(allowedRoles = []) {
  const token = localStorage.getItem("token");

  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const userType = decoded.userType;
    return allowedRoles.includes(userType);
  } catch (err) {
    return false;
  }
}