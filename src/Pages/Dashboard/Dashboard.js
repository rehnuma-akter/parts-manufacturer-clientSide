import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
            <h2 className="text-3xl font-bold text-secondary text-center my-3">
                Dashboard
            </h2>
            <Outlet />
            </div>
            <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                <li>
                <Link to={"/dashboard"}>My Profile</Link>
                </li>
                {!admin && <li>
                <Link to={"/dashboard/my-orders"}>My Order</Link>
                </li>}
                <li>
                <Link to={"/dashboard/add-review"}>Add Review</Link>
                </li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
