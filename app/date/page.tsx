"use client";

import { useRouter } from "next/navigation";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

import { useInvitation } from "@/app/context/InvitationContext";

export default function DatePage() {
  const router = useRouter();

  const { selectedDate, setSelectedDate } = useInvitation();

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <h1 className="text-center text-3xl font-bold text-gray-800">
          ❤️ Choose Our Date ❤️
        </h1>

        <p className="mt-2 text-center text-gray-500">
          When are you free?
        </p>

        <div className="mt-8 flex justify-center">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={{ before: new Date() }}
          />
        </div>

        {selectedDate && (
          <div className="mt-8 rounded-2xl bg-pink-100 p-5 text-center">
            <p className="font-semibold text-pink-600">
              Selected Date
            </p>

            <h2 className="mt-2 text-xl font-bold text-gray-800">
              ❤️{" "}
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h2>
          </div>
        )}

        <button
          disabled={!selectedDate}
          onClick={() => router.push("/food")}
          className={`mt-8 w-full rounded-full py-4 text-lg font-bold transition ${
            selectedDate
              ? "bg-pink-500 text-white hover:bg-pink-600"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          Continue →
        </button>
      </div>
    </main>
  );
}