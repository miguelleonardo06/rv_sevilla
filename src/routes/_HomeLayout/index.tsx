import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_HomeLayout/")({
  component: LandingPage,
});

function LandingPage() {
  return <main className="h-full w-full"></main>;
}
