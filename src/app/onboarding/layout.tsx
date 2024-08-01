import Sidebar from "@/components/Sidebar";
import React, { Suspense } from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full">
      <Sidebar />
      <section className="ml-[75px] px-12 py-8">
        <Suspense>{children}</Suspense>
      </section>
    </main>
  );
}

export default Layout;
