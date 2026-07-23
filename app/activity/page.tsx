"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useInvitation } from "@/app/context/InvitationContext";

const activities = [
  {
    name: "Movie",
    image: "/images/activity/movie.jpg",
  },
  {
    name: "Aquarium",
    image: "/images/activity/aquarium.jpg",
  },
  {
    name: "Amusement Park",
    image: "/images/activity/amusement.jpg",
  },
  {
    name: "Picnic",
    image: "/images/activity/picnic.jpg",
  },
  {
    name: "Night Walk",
    image: "/images/activity/nightwalk.jpg",
  },
  {
    name: "Art Museum",
    image: "/images/activity/museum.jpg",
  },
];

export default function ActivityPage() {
  const router = useRouter();

  const {
    selectedActivity,
    setSelectedActivity,
  } = useInvitation();

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 p-6">
      <div className="mx-auto max-w-md">

        <h1 className="mt-4 text-center text-4xl font-bold text-gray-800">
          🎈 Choose Our Activity
        </h1>

        <p className="mt-2 text-center text-gray-500">
          What shall we do together? 💕
        </p>

        <div className="mt-8 space-y-5">

          {activities.map((activity) => (

            <button
              key={activity.name}
              onClick={() => setSelectedActivity(activity.name)}
              className={`w-full overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 ${
                selectedActivity === activity.name
                  ? "scale-105 ring-4 ring-pink-400"
                  : "hover:scale-[1.02]"
              }`}
            >

              <div className="relative h-52 w-full">

                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="flex items-center justify-between px-6 py-5">

                <div>

                  <h2 className="text-xl font-bold text-gray-800">
                    {activity.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Let's make wonderful memories ❤️
                  </p>

                </div>

                {selectedActivity === activity.name && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white">
                    ✓
                  </div>
                )}

              </div>

            </button>

          ))}

        </div>

        <button
          disabled={!selectedActivity}
          onClick={() => router.push("/summary")}
          className={`mt-10 mb-10 w-full rounded-full py-4 text-lg font-bold transition ${
            selectedActivity
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