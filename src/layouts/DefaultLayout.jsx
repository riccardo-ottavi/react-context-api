import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

export default function DefaultLayout() {
    return (
        <>
            <header>
                <div className="title">
                    <p className="store-logo">NovaStore</p>
                    <MainNav />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}