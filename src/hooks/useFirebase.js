import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";
initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser] = useState({});
    const[isLoading, setisLoading]= useState(true);
    const auth = getAuth();

    const signInUsingGoogle =() =>{
        setisLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .finally(()=>setisLoading(false));

    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user);
            }
            else {
                setUser({})
            }
            setisLoading(false);
        });
        return()=> unsubscribed;
    },[auth])

    const logOut =()=>{
        setisLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=>setisLoading(false));
        
    }

    const signInEmail =(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
  }



const loginUser =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    }







    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInEmail,
        loginUser
    }
}
export default useFirebase;