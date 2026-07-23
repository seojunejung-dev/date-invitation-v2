"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useInvitation } from "@/app/context/InvitationContext";

const foods = [
  { name: "Sushi", image: "/images/food/sushi.jpg" },
  { name: "Pizza", image: "/images/food/pizza.jpg" },
  { name: "Pasta", image: "/images/food/pasta.jpg" },
  { name: "Steak", image: "/images/food/steak.jpg" },
  { name: "Dessert", image: "/images/food/dessert.jpg" },
  { name: "Cafe", image: "/images/food/cafe.jpg" },
];

export default function FoodPage() {
  const router = useRouter();

  const { selectedFood, setSelectedFood } = useInvitation();

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 p-6">
      <div className="mx-auto max-w-md">
        <h1 className="mt-4 text-center text-4xl font-bold text-gray-800">
          🍽️ Choose Our Food
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Pick what you'd like to eat together ❤️
        </p>

        <div className="mt-8 space-y-5">
          {foods.map((food) => (
            <button
              key={food.name}
              onClick={() => setSelectedFood(food.name)}
              className={`w-full overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 ${
                selectedFood === food.name
                  ? "scale-105 ring-4 ring-pink-400"
                  : "hover:scale-[1.02]"
              }`}
            >
              <div className="relative h-52 w-full">
                <Image
                  src={food.image}
                  alt={food.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between px-6 py-5">
                <h2 className="text-xl font-bold text-gray-800">
                  {food.name}
                </h2>

                {selectedFood === food.name && (
                  <span className="text-2xl">❤️</span>
                )}
              </div>
            </button>
          ))}
        </div>

        <button
          disabled={!selectedFood}
          onClick={() => router.push("/activity")}
          className={`mt-10 w-full rounded-full py-4 text-lg font-bold transition ${
            selectedFood
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