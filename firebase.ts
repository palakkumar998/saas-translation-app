import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// getApp ==>
// Retrieves a FirebaseApp instance.When called with no arguments, the default app is returned. When an app name is provided, the app corresponding to that name is returned.An exception is thrown if the app being retrieved has not yet been initialized.

//  getApps ==>
// A (read-only) array of all initialized apps.

//  initializeApp ==>
// Creates and initializes a FirebaseApp instance.

// getAuth ==>
// 	Returns the Auth instance associated with the provided FirebaseApp. If no instance exists, initializes an Auth instance with platform-specific default dependencies.

// getFirestore ==>
// Returns the existing default Firestore instance that is associated with the provided FirebaseApp. If no instance exists, initializes a new instance with default settings.

// getFunctions ==>
//  Returns a Functions instance for the given app.

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCU30ItdDDpcFRhAbNOJJOCjMjs5iCd8YY",
    authDomain: "saas-translation-web-app.firebaseapp.com",
    projectId: "saas-translation-web-app",
    storageBucket: "saas-translation-web-app.appspot.com",
    messagingSenderId: "1022808968780",
    appId: "1:1022808968780:web:3dbf10ded35deb227d2ee9"
};

// initialze app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
