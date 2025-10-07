"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardHeader({ heading, text }) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
        {text && <p className="text-muted-foreground">{text}</p>}
      </div>
      <Avatar className="h-8 w-8">
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </header>
  );
}