import Sidebar from "@/components/Sidebar";
import React from "react";
import TopBar from "./_top-bar";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full">
      <Sidebar />
      <section className="ml-[70px]">
        <TopBar />
        <article className="pt-[1rem]">{children}</article>
      </section>
    </main>
  );
}

export default Layout;
