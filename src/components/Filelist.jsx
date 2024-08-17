// FileList.jsx
import React, { useState,useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase/firebaseConfig';

function FileList() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const userEmail = auth.currentUser.email;
    const userDocRef = doc(db, 'users', userEmail);

    getDoc(userDocRef)
      .then((userDocSnapshot) => {
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          const fetchedFiles = userData.files || [];
          const files = userData.files || [];

          files.forEach(file => {
            console.log(`File Name: ${file.name}, URL: ${file.url}`);
          });
          setFiles(fetchedFiles);
        } else {
          console.log('No files found for this user.');
          setFiles([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching files:', error);
      });
  }, [auth.currentUser, db]);

  return (
    <div>
      <h2>Your Files</h2>
      <div>
      {files.length > 0 ? (
        files.map((file, index) => (
          <p className='m-3' key={index}>
            {index+1}. File Name: {file.name}, URL: <a href={file.url} target="_blank" rel="noopener noreferrer">{file.url}</a>
          </p>
        ))
      ) : (
        <p>No files available.</p>
      )}
      </div>
    </div>
  );
}

export default FileList;
