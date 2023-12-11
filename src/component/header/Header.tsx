import './Header.css'
import {Theme} from "../theme/Theme.tsx";
import { signOut } from 'firebase/auth';
import {auth} from "../../firebase.ts";

export function Header() {
    function handleSignOut(){
        signOut(auth)
    }

    return (
        <header className=" border-bottom d-flex flex-row align-items-center justify-content-between">
            <h2 className="p-1">
                <i className="bi bi-journal-check pe-3"></i>
                Task Manager
            </h2>
            <div className="p-4">
                <Theme />
                <button
                    onClick={handleSignOut} className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-person-dash pe-2" title="Sign out from the app"></i>
                    Sign Out
                </button>
            </div>
        </header>
    );
}