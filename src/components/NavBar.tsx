import type {ReactNode} from "react";

interface NavBarProps {
    children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
    return <button className='rounded-2xl bg-green-700 text-slate-50 font-semibold
    shadow-md shadow-green-900/90 hover:bg-green-800 active:text-slate-200 active:bg-green-900
    py-1 px-4 mr-5
    '>
        {children}
    </button>
}