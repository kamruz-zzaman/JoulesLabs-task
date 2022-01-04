import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthInit from "../Component/Firebase/Firebase.init";

const useFirebase = () => {
    firebaseAuthInit();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // User Login With Google
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => setUser(result))
            .catch((err) => console.log(err))
            .finally(() => {
                window.location.reload();
                setIsLoading(false)
            });

    };

    // User Logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => { alert(error.message) })
            .finally(() => setIsLoading(false));
    };

    // User Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);
    const AddHandler = (teamBtn) => {
        const newCart = [...cart, teamBtn]
        setCart(newCart);
    }
    let total = 0;
    // looping card data
    for (const carts of cart) {
        const { price } = carts;
        total = Math.round(total + price);

    }
    return {
        user,
        signinWithGoogle,
        logOut,
        isLoading,
        AddHandler,
        cart,
        total
    };
};

export default useFirebase;