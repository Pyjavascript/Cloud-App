import { useState,useEffect } from 'react';
import { app } from "../firebase/firebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  const [isNewUser, setIsNewUser] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const[err,SetErr] = useState('');

  const createUserDocument = async (email) => {
    const userDoc = doc(db, "users", email);
    await setDoc(userDoc, { email: email });
    console.log("Document created with email:", email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isNewUser) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        console.log('User signed up:', userCredential);
        await createUserDocument(email);
        navigate('/home');
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        
        console.log('User logged in:', userCredential);
        navigate('/home');
      }
      localStorage.setItem('isLoggedIn', 'true');
      
    } catch (error) {

      alert(error.message);
    }
  };
  useEffect(() => {
    SetErr("");
  }, [isNewUser]);
 

  return (
    <main className='main bg-[#f1f5fb] w-screen h-screen flex flex-col justify-center items-center relative'>
      <div className='flex flex-col gap-5 min-w-min max-w-sm p-2 px-10 rounded-lg'>
        <div>
        <h2 className='text-left font-bold text-4xl'>{isNewUser ? 'Sign Up' : 'Sign In'}</h2>
        <p className='text-slate-400 mt-1'>enjoy the free storage.</p>
        </div>
        <form onSubmit={handleFormSubmit} className='flex justify-start flex-col gap-4 mt-3'>
          {isNewUser && (
            <div>
              <input
                className='p-2 px-4 rounded-lg '
                type="text"
                value={username}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div>
            <input
              className='p-2 px-4 rounded-lg '
              type="email"
              value={email}
              placeholder='example@gmail.com'
              onChange={(e) => { setEmail(e.target.value);}}

            />
          </div>
          <div>
            <input
              className='p-2 px-4 rounded-lg '
              type="password"
              value={pass}
              placeholder='password'
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className='text-red-400'>{err}</div>
          <button className='shadow-lg rounded-lg py-2 bg-purple-600 text-white'>
            {isNewUser ? 'Sign Up' : 'Sign In'}
          </button>
        <button type='button' className='text-purple-600 hover:underline text-center w-full mt-3' onClick={() =>
          {
          setIsNewUser(!isNewUser)
          }}>
          {isNewUser ? 'Already have an account? Login' : 'New user? Sign Up'}
        </button>
        </form>

      </div>
      <div className='bg-black'>

      </div>
    </main>
  );
}

export default Signup;
