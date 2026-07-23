"use client";

import { useRouter } from "next/navigation";
import { useInvitation } from "@/app/context/InvitationContext";

export default function SummaryPage() {
  const router = useRouter();

  const {
    selectedDate,
    selectedFood,
    selectedActivity,
  } = useInvitation();

  if (!selectedDate || !selectedFood || !selectedActivity) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 p-6">
        <div className="rounded-3xl bg-white p-10 text-center shadow-2xl max-w-md">
          <h1 className="text-3xl font-bold text-gray-800">
            Oops! 😢
          </h1>

          <p className="mt-4 text-gray-600">
            Please complete all the steps first.
          </p>

          <button
            onClick={() => router.push("/")}
            className="mt-8 rounded-full bg-pink-500 px-8 py-4 text-white font-bold hover:bg-pink-600 transition"
          >
            Start Again ❤️
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="text-center">

          <div className="text-6xl animate-bounce">
            ❤️
          </div>

          <h1 className="mt-5 text-4xl font-bold text-gray-800">
            Our Date
          </h1>

          <p className="mt-2 text-gray-500">
            Here&apos;s our perfect plan 💕
          </p>

        </div>

        <div className="mt-10 space-y-5">

          <div className="rounded-2xl bg-pink-50 p-5">
            <p className="text-pink-500 font-semibold">
              📅 Date
            </p>

            <h2 className="mt-2 text-xl font-bold text-gray-800">
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h2>
          </div>

          <div className="rounded-2xl bg-pink-50 p-5">
            <p className="text-pink-500 font-semibold">
              🍽️ Food
            </p>

            <h2 className="mt-2 text-xl font-bold text-gray-800">
              {selectedFood}
            </h2>
          </div>

          <div className="rounded-2xl bg-pink-50 p-5">
            <p className="text-pink-500 font-semibold">
              🎈 Activity
            </p>

            <h2 className="mt-2 text-xl font-bold text-gray-800">
              {selectedActivity}
            </h2>
          </div>

        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-400 p-6 text-center text-white">

          <h2 className="text-2xl font-bold">
            I can&apos;t wait to see you ❤️
          </h2>

          <p className="mt-2">
            Thank you for saying YES!
          </p>

        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-10 w-full rounded-full bg-pink-500 py-4 text-lg font-bold text-white transition hover:bg-pink-600"
        >
          Start Over ↺
        </button>

      </div>

    </main>
  );
}