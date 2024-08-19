// FileUpload.jsx
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from "../firebase/firebaseConfig";
const Filelist = React.lazy(() => import('./Filelist'));

function FileUpload() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleUpload = () => {
      if (!file || !auth.currentUser) return;
  
      setUploading(true);
  
      const userEmail = auth.currentUser.email;
      const storageRef = ref(storage, `users/${userEmail}/${file.name}`);
      const userDocRef = doc(db, 'users', userEmail);

      uploadBytes(storageRef, file)
        .then(() => {
          return getDownloadURL(storageRef);
        })
        .then((fileUrl) => {
          return getDoc(userDocRef).then((userDocSnapshot) => {
            const userData = userDocSnapshot.exists() ? userDocSnapshot.data() : { files: [] };
            
          const currentFiles = Array.isArray(userData.files) ? userData.files : [];
          const updatedFiles = [
            ...currentFiles,
            {
              name: file.name,
              url: fileUrl,
              createdAt: new Date(),
            }
          ];
          
            return setDoc(userDocRef, { files: updatedFiles });
          });
        })
        .then(() => {
          alert('File uploaded successfully!');
        })
        .catch((error) => {
          console.error('Upload error:', error);
        })
        .finally(() => {
          setUploading(false);
        });
    };
  
    return (
      <>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
      </div>

      <FileList />
      </>
    );
  }
  
  export default FileUpload;