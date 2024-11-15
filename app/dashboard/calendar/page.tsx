"use client";

import { useState, useMemo } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { addDays, format } from "date-fns";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isLoading, setIsLoading] = useState(false);
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

  const filteredEvents = useMemo(() => {
    if (!date) return [];
    return events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
  }, [date, events]);

  const handleDateSelect = (newDate: Date | undefined) => {
    setIsLoading(true);
    try {
      setDate(newDate);
    } catch (error) {
      console.error("Error selecting date:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1 p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="rounded-md"
          disabled={isLoading}
        />
      </Card>
      <Card className="col-span-2 p-4">
        <h2 className="text-xl font-semibold mb-4">
          {date ? format(date, "MMMM d, yyyy") : "Select a date"}
        </h2>
        <div className="space-y-4">
          {isLoading ? (
            <p className="text-center py-4">Loading events...</p>
          ) : (
            <>
              {filteredEvents.map((event, index) => (
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
              {date && filteredEvents.length === 0 && (
                <p className="text-muted-foreground text-center py-4">
                  No events scheduled for this day
                </p>
              )}
            </>
          )}
        </div>
      </Card>
    </div>
  );
}