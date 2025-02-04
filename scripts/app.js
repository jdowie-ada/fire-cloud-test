// Import the db object from firebase-config.js
import { db } from './firebase-config.js';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

// Function to write "Hello World" to Firestore
async function writeData() {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      text: "Hello world"
    });
    console.log("Document written with ID: ", docRef, docRef.id);

  } catch (e) {
    console.error("Error adding document: ", e);
  } 
}
  
  // Function to read "Hello World" from Firestore
  async function readData() {
    const querySnapshot = await getDocs(collection(db, "messages"));
    querySnapshot.forEach((doc) => {
      console.log("reading", doc.data().text)
      document.getElementById("message").innerText = doc.data().text
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  
  // Main function to run the app
  async function main() {
    await writeData(); // Write data to Firestore
    await readData();       // Listen for real-time updates
  }
  
  // Run the app
  main();