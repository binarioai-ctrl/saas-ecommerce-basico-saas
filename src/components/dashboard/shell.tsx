"use client";

import { ReactNode } from "react";

interface ShellProps {
  children: ReactNode;
  className?: string;
}

export function DashboardShell({ children, className }: ShellProps) {
  return (
    <div className={`flex min-h-screen flex-col space-y-6 ${className || ""}`}>
      <div className="container grid flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}