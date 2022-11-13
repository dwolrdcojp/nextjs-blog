import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { Timestamp, doc, getDoc, collection, getDocs, addDoc, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "nextjs-13-blog.firebaseapp.com",
  projectId: "nextjs-13-blog",
  storageBucket: "nextjs-13-blog.appspot.com",
  messagingSenderId: "744967775328",
  appId: "1:744967775328:web:054be54634346cbcefcf05",
  measurementId: "G-PQSTENK0LL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

// Get posts
export async function getPosts() {
  const blogRef = collection(firestore, "1");
  const q = query(blogRef, orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);
  const allDocs = querySnapshot.docs;
  const allPosts = allDocs.map((doc) => (
    { 
      id: doc.id, 
      title: doc.data().title, 
      date: doc.data().date.toDate().toLocaleDateString(),
    }));

  
  console.log(allPosts);

  return allPosts;
}

// Get post ids 
export async function getPostIds() {
  const querySnapshot = await getDocs(collection(firestore, "1"));
  const allDocs = querySnapshot.docs;
  const ids  = allDocs.map((doc) => ({ id: doc.id.toString() }));

  return ids;
}

// Get post data
export async function getPostData(id) {
  const docRef = doc(firestore, "1", id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

// Add a post 
export async function addPost(title, date, content) {
  try {
    const docRef = await addDoc(collection(firestore, "1"), {
      title: title,
      date: Timestamp.fromDate(new Date(date)),
      content: content,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default firestore;
