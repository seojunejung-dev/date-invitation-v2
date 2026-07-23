"use client";

import { createContext, useContext, useState } from "react";

type InvitationContextType = {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;

  selectedFood: string;
  setSelectedFood: (food: string) => void;

  selectedActivity: string;
  setSelectedActivity: (activity: string) => void;
};

const InvitationContext = createContext<InvitationContextType | null>(null);

export function InvitationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");

  return (
    <InvitationContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedFood,
        setSelectedFood,
        selectedActivity,
        setSelectedActivity,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
}

export function useInvitation() {
  const context = useContext(InvitationContext);

  if (!context) {
    throw new Error(
      "useInvitation must be used inside InvitationProvider"
    );
  }

  return context;
}