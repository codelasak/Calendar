import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Users, Clock, Calendar } from "lucide-react";

const stats = [
  {
    title: "Total Appointments",
    value: "24",
    change: "+12% from last month",
    icon: CalendarDays,
  },
  {
    title: "Active Clients",
    value: "12",
    change: "+2 new this week",
    icon: Users,
  },
  {
    title: "Hours Scheduled",
    value: "36",
    change: "+8 hours this week",
    icon: Clock,
  },
  {
    title: "Upcoming Events",
    value: "8",
    change: "Next 7 days",
    icon: Calendar,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Weekly Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {/* Add your chart component here */}
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Add your activity list here */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}