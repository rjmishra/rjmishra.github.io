import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This page is currently disabled.",
};

export default function BlogPage() {
  notFound();
}
