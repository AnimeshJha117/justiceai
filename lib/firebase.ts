import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: "AIzaSyCh-3D0NleJNxnQ-UnM0GP2QkKTvXHTjFU",
  authDomain: "lifeos-ai-f1557.firebaseapp.com",
  projectId: "lifeos-ai-f1557",
  storageBucket: "lifeos-ai-f1557.firebasestorage.app",
  messagingSenderId: "540508248849",
  appId: "1:540508248849:web:4180820c777ed661500ab0",
  measurementId: "G-WC1HQ5LQMN"
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;
let storage: FirebaseStorage | undefined;

/**
 * Initialize Firebase - only in browser environment
 */
function initializeFirebase() {
  // Only initialize in browser
  if (typeof window === 'undefined') {
    return;
  }

  if (!getApps().length && firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } else if (getApps().length) {
    app = getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  }
}

// Initialize on module load if in browser
if (typeof window !== 'undefined') {
  initializeFirebase();
}

export function getFirebaseAuth(): Auth | undefined {
  if (!auth && typeof window !== 'undefined') {
    initializeFirebase();
  }
  return auth;
}

export function getFirebaseDb(): Firestore | undefined {
  if (!db && typeof window !== 'undefined') {
    initializeFirebase();
  }
  return db;
}

export function getFirebaseStorage(): FirebaseStorage | undefined {
  if (!storage && typeof window !== 'undefined') {
    initializeFirebase();
  }
  return storage;
}

export function getFirebaseApp(): FirebaseApp | undefined {
  if (!app && typeof window !== 'undefined') {
    initializeFirebase();
  }
  return app;
}

// Legacy exports for backward compatibility
export { auth, db, storage };
export default app;
