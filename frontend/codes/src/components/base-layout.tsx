"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

type Author = {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
};

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen w-[90vw]  flex-col items-center justify-between p-24">
      <div className="flex flex-row gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 py-4">
              <Link href="/dashboard">
                <Button>Books</Button>
              </Link>
              <Link href="/dashboard/authors">
                <Button>Author</Button>
              </Link>
              <Link href="/dashboard/subjects">
                <Button>Subject</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>{children}</Card>
      </div>
    </main>
  );
}
