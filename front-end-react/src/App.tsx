import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Form} from "./component/form/Form.tsx";
import {TaskList} from "./component/tasklist/TaskList.tsx";
import {TaskProvider} from "./context/task-context.tsx";
import {useUser, useUserDispatcher} from "./context/user-context.tsx";
import {auth} from "./firebase.ts";
import { onAuthStateChanged } from 'firebase/auth';
import {SignIn} from "./component/signin/SignIn.tsx";
import {Loader} from "./component/loader/Loader.tsx";
import {Header} from "./component/header/Header.tsx";

function App() {
    const [loader, setLoader] = useState(true);
    const user = useUser();
    const userDispatcher = useUserDispatcher();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoader(false);
            if (user) {
                userDispatcher({type: 'sign-in', user});
            } else {
                userDispatcher({type: 'sign-out'});
            }
        });
        return () => unsubscribe();
    }, []);

  return (
    <>
        {loader ?   // if (loader)
            <Loader/>
            :           // else

            user ?  // if (user)
                <>
                    <Header/>
                    <TaskProvider>
                    <Form/>
                    <TaskList/>
                    </TaskProvider>
                </>
                :       // else
                <SignIn/>
        }
    </>
  )
}

export default App
