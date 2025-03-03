"use client"

import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Users, LayoutGrid, Presentation, MessageSquare } from "lucide-react"
import FooterLink from "@/components/footer-link"

export default function PerformanceDashboard() {
  // Topics data
  const topicsData = [
    { name: "Large Language Models", value: 33.3 },
    { name: "Python Projects", value: 28.6 },
    { name: "Others", value: 19.0 },
    { name: "DevOps", value: 14.3 },
    { name: "Robotics", value: 4.8 },
  ]

  // Participation reasons data
  const reasonsData = [
    { name: "ML & DL", value: 58.6 },
    { name: "Data Science & Analysis", value: 51.7 },
    { name: "Automation & Scripting", value: 44.8 },
  ]

  // Participants demographics data
  const demographicsData = [
    { name: "Increase from 2023", value: 54.3 },
    { name: "From companies >1K employees", value: 37.9 },
    { name: "With >3 years Python experience", value: 51.2 },
    { name: "Females", value: 37.5 },
  ]

  // Speakers data
  const speakersData = [
    { name: "CFP Admission Rate", value: 50 },
    { name: "Non-local Speakers", value: 26.1 },
    { name: "Female Speakers", value: 23.3 },
  ]

  // Colors for the charts
  const COLORS = ["#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3"]

  return (
    <>
    <div className="container mx-auto p-4">
      <div className="bg-[#e91e63] text-white p-4 mb-6 rounded-md">
        <h1 className="text-2xl font-bold">PyCon MY 2024: Performance at a glance</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#e91e63]">161</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tracks</CardTitle>
            <LayoutGrid className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#e91e63]">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Keynotes</CardTitle>
            <Presentation className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#e91e63]">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sessions</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#e91e63]">18</div>
            <div className="text-xs text-muted-foreground mt-1">+ 1 Panel Session, 1 Fireside Chat</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Topics</CardTitle>
            <CardDescription>Distribution of topics covered</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] px-2">
            <ChartContainer
              config={{
                topics: {
                  label: "Topics",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <Pie
                    data={topicsData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {topicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Reason of Participation</CardTitle>
            <CardDescription>Why attendees joined the event</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] px-2">
            <ChartContainer
              config={{
                value: {
                  label: "Percentage",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={reasonsData} layout="vertical" margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" width={90} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" radius={4} fill="#e91e63">
                    {reasonsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
          <div className="text-xs text-muted-foreground px-6 pb-4 mt-4">*participants can pick more than 1 topic</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Participants Demographics</CardTitle>
            <CardDescription>Key statistics about attendees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {demographicsData.map((item, index) => (
                <div key={index} className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#e91e63]">{item.value}%</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Speakers</CardTitle>
            <CardDescription>Statistics about event speakers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {speakersData.map((item, index) => (
                <div key={index} className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#9c27b0]">{item.value}%</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <div className="text-xs text-muted-foreground px-6 pb-4">Priority on diversity among speakers and topics</div>
        </Card>
      </div>
    </div>
    <FooterLink />
    </>
  )
}

