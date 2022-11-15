import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { 
  Timestamp, 
  doc, 
  getDoc, 
  collection, 
  getDocs, 
  addDoc, 
  query, 
  orderBy, 
  setDoc, 
  limit, 
  startAfter,
  startAt
} from "firebase/firestore";

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
export async function getPosts(page) {
  const blogRef = collection(firestore, "1");
  const q = query(blogRef, orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);

  const lastVisible = querySnapshot.docs[(page - 1) * 5];
  const next = query(blogRef, 
               orderBy("date", "desc"), 
               startAt(lastVisible), 
               limit(5));
  const nextSnapshot = await getDocs(next);
  const nextDocs = nextSnapshot.docs;

  const allDocs = querySnapshot.docs;

  const allPosts = nextDocs.map((doc) => (
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
export async function addPost(title, content) {
  const randNum = Math.floor(Math.random() * 100);
  const titleId = randNum + "-" + title;
  try {
    const docRef = await setDoc(doc(firestore, "1", titleId), {
      title: title,
      date: Timestamp.now(),
      content: content,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default firestore;
