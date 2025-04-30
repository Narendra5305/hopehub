// import { createContext, useContext, useEffect, useState } from 'react';
// import jwt from 'jsonwebtoken'; // ✅ Import jsonwebtoken instead of jwtDecode

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   useEffect(() => {
//     if (token) {
//       try {
//         const decoded = jwt.decode(token); // Use jsonwebtoken's decode method
//         setUser(decoded);
//       } catch (error) {
//         console.error('Invalid token:', error);
//         logout();
//       }
//     }
//   }, [token]);

//   const loginUser = (jwtToken) => {
//     localStorage.setItem('token', jwtToken);
//     setToken(jwtToken);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, loginUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


