import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "Admin Dashboard",
  description: "Dashboard",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dahboard</h1>
      <span className="text-xl">General Information</span>
      <WidgetsGrid />
    </div>
  );
}
