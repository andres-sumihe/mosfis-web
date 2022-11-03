import 'Firebase/auth';

import Firebase from 'Firebase/app';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};
// if a Firebase instance doesn't exist, create one
if (!Firebase.getApps()) {
  Firebase.initializeApp(FirebaseCredentials);
}

export default Firebase;
