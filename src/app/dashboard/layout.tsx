import Sidebar from "@/components/Sidebar";
import React from "react";
import TopBar from "./_top-bar";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full">
      <Sidebar />
      <section className="ml-[70px] min-h-screen">
        <TopBar />
        <div className="py-20 px-8 min-h-screen">{children}</div>
      </section>
    </main>
  );
}

export default Layout;
