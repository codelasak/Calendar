"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { addDays, format } from "date-fns";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events] = useState([
    {
      title: "Team Meeting",
      date: addDays(new Date(), 1),
      time: "10:00 AM",
    },
    {
      title: "Client Consultation",
      date: addDays(new Date(), 2),
      time: "2:00 PM",
    },
  ]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1 p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md"
        />
      </Card>
      <Card className="col-span-2 p-4">
        <h2 className="text-xl font-semibold mb-4">
          {date ? format(date, "MMMM d, yyyy") : "Select a date"}
        </h2>
        <div className="space-y-4">
          {events
            .filter(
              (event) =>
                date &&
                event.date.toDateString() === date.toDateString()
            )
            .map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-secondary rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              </div>
            ))}
          {date &&
            events.filter(
              (event) => event.date.toDateString() === date.toDateString()
            ).length === 0 && (
              <p className="text-muted-foreground text-center py-4">
                No events scheduled for this day
              </p>
            )}
        </div>
      </Card>
    </div>
  );
}