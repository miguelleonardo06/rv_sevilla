import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
export const Route = createFileRoute("/_HomeLayout")({
  component: HomeLayout,
});

function HomeLayout() {
  return (
    <main className="h-screen w-full">
      <Navbar />
      dawdada
      <Outlet />
    </main>
  );
}
