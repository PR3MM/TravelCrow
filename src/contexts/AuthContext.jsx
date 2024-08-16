import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../Firebase';  // Make sure the path is correct
import { signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , sendPasswordResetEmail} from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function Login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  async function Logout() {
    try {
      await signOut(auth); // Use signOut from Firebase
      console.error('signing out:');  
    } catch (error) {
      console.error('Error signing out:', error); // Handle error
      throw error;
    }
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    Login,
    signup,
    Logout,
    resetPassword
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
