"use client";

import { useRouter } from "next/navigation";
import EscapeButton from "./components/EscapeButton";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-2xl">

        <div className="text-7xl animate-bounce">
          ❤️
        </div>

        <h1 className="mt-6 text-4xl font-bold text-gray-800">
          Will You Go Out
          <br />
          With Me?
        </h1>

        <EscapeButton
          onYes={() => router.push("/date")}
        />

      </div>

    </main>
  );
}