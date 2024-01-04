import { redirect } from "next/navigation";

export default function HomePage() {
  // function that send my from http://localhost:3001/ to http://localhost:3001/dashboard/counter

  redirect("/dashboard/main");
}
