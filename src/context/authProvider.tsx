import { createContext, useState } from 'react'

const AuthContext: any = createContext({})

interface Notification{
    id: number;
    type: string;
    message: string;
    read: boolean;
}

interface PhoneAccount {
    id: number;
    phone_number: string;
    account_name: string;
    account_type: string;
}

interface Profile {
    user: {
        id: number;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone_number: string;
        last_seen: string;
        active_workspace: number;
        avatar: string;
        permission: string;
        country: string;
        notifications: Notification[] | null
    },
    workspace: {
        billing: {
            id: number;
            currency: string;
            plan: string;
            status: string;
            account: PhoneAccount | null
        },
    }
}

interface Auth {
    access: string;
    refresh: string;
}

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState<Auth | null>(null)
    const [profile, setProfile] = useState<Profile | null>(null)

    return (
        <AuthContext.Provider value={{ auth, setAuth, profile, setProfile }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;