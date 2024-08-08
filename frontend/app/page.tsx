"use client"

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CartesianGrid, XAxis, Bar, BarChart, Line, LineChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";

export default function Home() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 gap-4 bg-muted/40 p-4 md:grid-cols-2 md:gap-8 md:p-2 lg:grid-cols-3 lg:gap-12 lg:p-12">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <Card>
          <CardHeader>
            <CardDescription>Total Assets</CardDescription>
            <CardTitle>$1,234,567</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Total Liabilities</CardDescription>
            <CardTitle>$456,789</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Equity</CardDescription>
            <CardTitle>$777,778</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <Card>
          <CardHeader>
            <CardDescription>Sales</CardDescription>
            <CardTitle>$987,654</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Expenses</CardDescription>
            <CardTitle>$654,321</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Purchases</CardDescription>
            <CardTitle>$321,987</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Financial Charts</CardTitle>
            <CardDescription>
              Visualize your key financial metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="bar">
              <TabsList>
                <TabsTrigger value="bar">Bar Chart</TabsTrigger>
                <TabsTrigger value="line">Line Chart</TabsTrigger>
                <TabsTrigger value="comparative">Comparative Chart</TabsTrigger>
              </TabsList>
              <TabsContent value="bar">
                <BarchartChart className="aspect-[16/9]" />
              </TabsContent>
              <TabsContent value="line">
                <LinechartChart className="aspect-[16/9]" />
              </TabsContent>
              <TabsContent value="comparative">
                <BarchartChart className="aspect-[16/9]" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function BarchartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
