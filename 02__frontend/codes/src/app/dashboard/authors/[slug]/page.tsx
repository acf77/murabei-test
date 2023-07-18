"use client";

import BaseLayout from "@/components/base-layout";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

type Author = {
  id: number;
  title: string;
  biography: string;
  slug: string;
  publisher: string;
  synopsis: string;
};

export default function AuthorPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const [authorBooks, setAuthorBooks] = useState<Author[]>();

  const getBooks = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    debugger;

    let response = await fetch(
      `http://localhost:8000/api/v1/books/author/${params.slug}`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    return data;
  };

  useEffect(() => {
    getBooks().then((data) => {
      setAuthorBooks(data);
    });
  }, []);

  return (
    <BaseLayout>
      {authorBooks?.map((book) => (
        <div
          key={book.id}
          className="flex flex-col gap-2 p-4 hover:bg-slate-50"
        >
          <p>
            <strong>{book.title}</strong>
          </p>
          <p>{book.publisher}</p>
          <p>{parse(book.synopsis)}</p>
        </div>
      ))}
    </BaseLayout>
  );
}
