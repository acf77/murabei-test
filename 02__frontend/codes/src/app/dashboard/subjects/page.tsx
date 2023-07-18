"use client";

import BaseLayout from "@/components/base-layout";
import Link from "next/link";
import { useEffect, useState } from "react";

type Subject = {
  id: number;
  title: string;
  slug: string;
};

export default function Subjects() {
  const [subjects, setSubjects] = useState<Subject[]>();

  const getSubjects = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let response = await fetch("http://localhost:8000/api/v1/books/subjects", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    return data;
  };

  useEffect(() => {
    getSubjects().then((data) => {
      setSubjects(data);
    });
  }, []);

  return (
    <BaseLayout>
      {subjects?.map((subject, i) => (
        <Link href={`/dashboard/subjects/${subject}`} key={subject.id}>
          <div key={i} className="flex flex-col gap-2 p-4 hover:bg-slate-50">
            <p>{subject}</p>
          </div>
        </Link>
      ))}
    </BaseLayout>
  );
}
