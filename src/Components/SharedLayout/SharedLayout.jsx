import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

export default function SharedLayout() {
    return (
        <Suspense fallback={<Preloader />}>
            <Outlet />
        </ Suspense>
    );
};