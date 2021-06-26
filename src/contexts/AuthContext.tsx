import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { auth, firebase } from '../services/firebase';

export const AuthContext = createContext({} as AuthContextype);

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextype = {
  user: User | undefined;
  theme: boolean;
  signInWithGoogle: () => Promise<void>;
  setTheme: Dispatch<SetStateAction<boolean>>;
};

type AuthContextProviderProps = {
	children: ReactNode;
};

export function AuthContextProvider(props: AuthContextProviderProps) {

	const [user, setUser] = useState<User>();

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid } = user;

        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })

    return () => {
      unsubscribe();
    }

  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if(result.user) {
      const { displayName, photoURL, uid } = result.user;

      if(!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })

    }
  }

	return(
		<AuthContext.Provider value={{ user, theme, setTheme, signInWithGoogle  }}>
			{props.children}
		</AuthContext.Provider>
	);
}