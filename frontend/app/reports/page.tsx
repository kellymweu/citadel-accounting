"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { CartesianGrid, XAxis, Line, LineChart, Bar, BarChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";

export default function reports() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Financial Reports</h1>
      </header>
      <main className="flex-1 p-6 md:p-10">
        <section className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Line Chart</CardTitle>
              <CardDescription>Financial data over time</CardDescription>
            </CardHeader>
            <CardContent>
              <LinechartChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart</CardTitle>
              <CardDescription>Key financial metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <BarchartChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-bold mb-4">Income Statement</h2>
          <div className="border rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Revenue</TableCell>
                  <TableCell>$1,000,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cost of Goods Sold</TableCell>
                  <TableCell>$600,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gross Profit</TableCell>
                  <TableCell>$400,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Operating Expenses</TableCell>
                  <TableCell>$200,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Net Income</TableCell>
                  <TableCell>$200,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        <section className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Balance Sheet</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Cash</TableCell>
                    <TableCell>$500,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Accounts Receivable</TableCell>
                    <TableCell>$300,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Inventory</TableCell>
                    <TableCell>$200,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Assets</TableCell>
                    <TableCell>$1,000,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Accounts Payable</TableCell>
                    <TableCell>$150,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Loans</TableCell>
                    <TableCell>$300,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Liabilities</TableCell>
                    <TableCell>$450,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Equity</TableCell>
                    <TableCell>$550,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Net Income</TableCell>
                    <TableCell>$200,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Depreciation</TableCell>
                    <TableCell>$50,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Change in Accounts Receivable</TableCell>
                    <TableCell>($50,000)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Change in Inventory</TableCell>
                    <TableCell>($20,000)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Change in Accounts Payable</TableCell>
                    <TableCell>$30,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Net Cash Flow from Operations</TableCell>
                    <TableCell>$210,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

function BarchartChart(props: any) {
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

function LinechartChart(props: any) {
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
