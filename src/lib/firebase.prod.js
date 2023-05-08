import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';


const config = 
    { 
        apiKey: "AIzaSyBcxssUxfjrF-Dknhq5OsmQB1NfTE1EPQg",
        authDomain: "neflix-70114.firebaseapp.com",
        projectId: "neflix-70114",
        storageBucket: "neflix-70114.appspot.com",
        messagingSenderId: "158665256478",
        appId: "1:158665256478:web:7532e51ec53db61f08480f"
    };

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
