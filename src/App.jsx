import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
const Signup = React.lazy(() => import('./components/signup'));
const Home = React.lazy(() => import('./components/Home'));
const Start = React.lazy(() => import('./components/Start'));


// const MyComponent = () => import('./MyComponent');
function App() {
  // const [isStart,setIsStart] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(null); 
  const [userExists, setUserExists] = useState(false);
  const auth = getAuth();
  const db = getFirestore();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        
        setIsAuthenticated(true);
        
        const userDoc = doc(db, 'users', user.email);
        const docSnapshot = await getDoc(userDoc);
        if (docSnapshot.exists()) {
          console.log(docSnapshot);
          
          setUserExists(true);
        } else {
          setUserExists(false);
        }
      } else {
        setIsAuthenticated(false);
        setUserExists(false);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  if (isAuthenticated === null) {
    return (
    <div className='w-screen h-screen bg-[#f1f5fb] flex justify-center items-center'>
      <p className='text-slate-400'>Loading...</p>
    </div>
    )
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
                <Route path="/signup" element={<Signup />} />
        <Route path="/" element= {<Start/>} />
        <Route
          path="/User"
          element={<Signup/>}
        />
        <Route
          path="/home"
          element={<Home/>}
        />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
