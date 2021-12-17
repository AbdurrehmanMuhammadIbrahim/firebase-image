import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6OKVMr6-FtFGsLGIB8SM7Ti56eeh7dNc",
  authDomain: "fir-react-image-df446.firebaseapp.com",
  projectId: "fir-react-image-df446",
  storageBucket: "fir-react-image-df446.appspot.com",
  messagingSenderId: "782935307558",
  appId: "1:782935307558:web:8bb9d6f0bf86b70ba63de7"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };

// import firebase from "./firebase"


// const Config={
//     apiKey: "AIzaSyA6OKVMr6-FtFGsLGIB8SM7Ti56eeh7dNc",
//     authDomain: "fir-react-image-df446.firebaseapp.com",
//     projectId: "fir-react-image-df446",
//     storageBucket: "fir-react-image-df446.appspot.com",
//     messagingSenderId: "782935307558",
//     appId: "1:782935307558:web:8bb9d6f0bf86b70ba63de7"
// }

// firebase.initializeApp(Config);
// export default firebase;