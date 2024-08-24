import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut, sendEmailVerification } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Signup from './components/signup';
import Home from './components/Home';
import Start from './components/Start';
import Account from './components/Account';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userExists, setUserExists] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = doc(db, 'users', user.email);
        const docSnapshot = await getDoc(userDoc);

        setIsAuthenticated(true);
        setEmailVerified(user.emailVerified);

        if (docSnapshot.exists()) {
          setUserExists(true);
        } else {
          setUserExists(false);
        }

        if (!user.emailVerified) {
          sendEmailVerification(user);
          alert('Please verify your email. A verification link has been sent to your email address.');
        }
      } else {
        setIsAuthenticated(false);
        setUserExists(false);
        setEmailVerified(false);
      }

      setLoading(false); // Stop loading after checking authentication
    });

    return () => unsubscribe();
  }, [auth, db]);

  if (loading) {
    return (
      <div className='w-screen h-screen bg-[#f1f5fb] flex justify-center items-center'>
        <p className='text-slate-400'>Loading...</p>
      </div>
    );
  }

  return (
    <Router basename="/Cloud-App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Start />} />
        <Route path="/User" element={<Signup />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              emailVerified ? (
                <Home />
              ) : (
                <div className='w-screen h-screen bg-[#f1f5fb] flex justify-center items-center'>
                  <p className='text-slate-400'>Please verify your email to access the home page.</p>
                  <button
                    className='bg-purple-600 text-white px-4 py-2 rounded mt-4'
                    onClick={() => signOut(auth).then(() => setIsAuthenticated(false))}>Logout</button>
                </div>
              )
            ) : (
              <Navigate to="/signup" />
            )
          }
        />
      <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
