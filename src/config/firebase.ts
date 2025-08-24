import * as admin from 'firebase-admin';
import serviceAccountJson from '../firebase.json';
import { ServiceAccount } from 'firebase-admin';

// Type assertion to ServiceAccount
const serviceAccount = serviceAccountJson as ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
