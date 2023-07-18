"use client";

import BaseLayout from "@/components/base-layout";
import { useEffect, useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
};

export default function Home() {
  const [books, setBooks] = useState<Book[]>();

  const getBooks = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let response = await fetch("http://localhost:8000/api/v1/books", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    return data;
  };

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <BaseLayout>
      {books?.map((book, i) => (
        <div key={i} className="flex flex-col gap-2 p-4 hover:bg-slate-50">
          <p>
            <strong>{book.title}</strong>
          </p>
          <p>{book.author}</p>
        </div>
      ))}
    </BaseLayout>
  );
}
