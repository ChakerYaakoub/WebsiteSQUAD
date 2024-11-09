// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase Storage modules

import firebaseConfig from "./serviceAccountKey";
// import dataUserDefault from './dataUserDefault'
import { CollectionData, DocData, RootData } from "../models/DefaultUserData";
import collections, { CollectionName } from "./collections";
import createDataUserDefault from "./dataUserDefault";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore and Storage references
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// Function to upload image to Firebase Storage
export const uploadImageToStorage = async (
  path: string,
  name: string
): Promise<string> => {
  // Fetch the image file using its path (assuming it's available in the public folder)
  const response = await fetch(path);
  const blob = await response.blob();

  // Upload the image blob to Firebase Storage
  const storageRef = ref(storage, `images/${name}`);
  await uploadBytes(storageRef, blob);

  // Get the download URL of the uploaded image
  const url = await getDownloadURL(storageRef);
  console.log(`Image uploaded to: ${url}`);
  return url;
};

// Function to check if all collections exist in Firestore
const checkCollectionsExist = async (): Promise<boolean> => {
  try {
    for (const collectionName of collections) {
      const collectionRef = collection(db, collectionName as CollectionName);
      const querySnapshot = await getDocs(collectionRef);
      if (querySnapshot.empty) {
        return false; // At least one collection is missing
      }
    }
    return true; // All collections exist
  } catch (error) {
    console.error("Error checking collections:", error);
    return false;
  }
};

// Function to create data in Firestore
const createDataInFirestore = async () => {
  try {
    // Check if all collections exist in Firestore
    const collectionsExist = await checkCollectionsExist();

    if (!collectionsExist) {
      console.log("Creating data...");

      // Fetch default data
      const data: RootData = await createDataUserDefault();

      // Iterate over each collection defined in the default data
      for (const collectionName in data.dataUser) {
        if (data.dataUser.hasOwnProperty(collectionName)) {
          const collectionRef = collection(
            db,
            collectionName as CollectionName
          );
          const collectionData = data.dataUser[
            collectionName as CollectionName
          ] as DocData[];

          // Check if the collection is empty
          const querySnapshot = await getDocs(collectionRef);
          if (querySnapshot.size === 0) {
            console.log(`Creating collection: ${collectionName}`);
            // Loop through each document in the collection and add it to Firestore
            collectionData.forEach(async (doc) => {
              await addDoc(collectionRef, doc);
            });
            console.log(
              `Collection '${collectionName}' created with documents.`
            );
          } else {
            console.log(`Collection '${collectionName}' already exists.`);
          }
        }
      }
      console.log("Data creation complete.");
    } else {
      console.log("All collections already exist. Skipping data creation.");
    }
  } catch (error) {
    console.error("Error creating data:", error);
  }
};

export default createDataInFirestore;
