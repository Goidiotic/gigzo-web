// src/utils/authUser.js

// Get raw token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Decode JWT safely
export const getUserFromToken = () => {
  try {
    const token = getToken();
    if (!token) return null;

    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload;

  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

// Get UID
export const getUID = () => {
  const user = getUserFromToken();
  return user?.uid || null;
};

// Get Mobile Number
export const getMobile = () => {
  const user = getUserFromToken();
  return user?.mobile || null;
};

// Optional: Check if logged in
export const isLoggedIn = () => {
  return !!getToken();
};

// Optional: Logout helper
export const logout = () => {
  localStorage.removeItem("token");
};