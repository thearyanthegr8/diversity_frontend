import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full">
      <Sidebar />
      <section className="ml-[75px]">{children}</section>
    </main>
  );
}

export default Layout;
