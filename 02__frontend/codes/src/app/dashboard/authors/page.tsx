"use client";

import BaseLayout from "@/components/base-layout";
import parse from "html-react-parser";
import Link from "next/link";
import { useEffect, useState } from "react";

type Author = {
  id: number;
  title: string;
  biography: string;
  slug: string;
};

export default function Authors() {
  const [authors, setAuthors] = useState<Author[]>();

  const getBooks = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let response = await fetch("http://localhost:8000/api/v1/authors", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    return data;
  };

  useEffect(() => {
    getBooks().then((data) => {
      setAuthors(data);
    });
  }, []);

  return (
    <BaseLayout>
      {authors?.map((author) => (
        <Link href={`/dashboard/authors/${author.slug}`} key={author.id}>
          <div
            key={author.id}
            className="flex flex-col gap-2 p-4 hover:bg-slate-50"
          >
            <p>
              <strong>{author.title}</strong>
            </p>
            <p>{parse(author.biography)}</p>
          </div>
        </Link>
      ))}
    </BaseLayout>
  );
}
