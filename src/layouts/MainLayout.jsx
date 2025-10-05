import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="h-[100vh] m-5 md:m-10">
      <Outlet />
    </div>
  );
}
