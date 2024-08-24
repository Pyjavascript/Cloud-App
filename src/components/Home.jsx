import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Account from "./Account";

function Home() {
  const [isNav,SetisNav] = useState(false);
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/');
  };
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, [auth, db]);
  const handleUserOpt = () => {
    SetisNav(e => !e)
  }
  const Account = () => {
    navigate('/account');
  }
  return (
    <>
      <div className="bg-[#f1f5fb]  w-screen h-screen relative">
        <div className=" p-2 w-full flex justify-between items-center">
        <ion-icon name="menu-outline"></ion-icon>

        <div onClick={handleUserOpt}>
        <ion-icon name="person-circle-outline"></ion-icon>
        </div>
        </div>
        {/* {userData && (
          <div>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            
          </div>

        )} */}
        <div className={`lg:w-1/6 overflow-hidden transition-all ${isNav? "absolute":"hidden"} right-0 bg-white flex flex-col justify-start items-center  w-1/2 border-2 rounded-lg`}>
        <button className="p-1 py-2 px-2 w-full hover:bg-purple-600 hover:text-white border-b-2" onClick={Account}>Account</button>
        <button className="p-1 py-2 px-2 w-full hover:bg-purple-600 hover:text-white border-b-2">User Data</button>
        <button onClick={handleLogoutClick} className="text-red-500 w-full px-2 p-1 hover:bg-red-200 py-2">Logout</button>
        </div>
        {/* <FileUpload /> */}
      </div>
    </>
  );
}

export default Home;
