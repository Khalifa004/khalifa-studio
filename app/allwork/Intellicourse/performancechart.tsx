import React from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Area,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    stage: "Initial",
    loadTime: 4.2,
    firstContentfulPaint: 2.1,
    timeToInteractive: 5.3,
    performanceScore: 65,
  },
  {
    stage: "Optimization 1",
    loadTime: 3.5,
    firstContentfulPaint: 1.8,
    timeToInteractive: 4.5,
    performanceScore: 75,
  },
  {
    stage: "Optimization 2",
    loadTime: 2.8,
    firstContentfulPaint: 1.5,
    timeToInteractive: 3.7,
    performanceScore: 85,
  },
  {
    stage: "Final",
    loadTime: 2.1,
    firstContentfulPaint: 1.2,
    timeToInteractive: 2.9,
    performanceScore: 95,
  },
]



export const PerformanceChart = () => (
  <div className="space-y-8">
    <Card>
      <CardHeader>
        <CardTitle>Overall Performance Score</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip  />
            <Bar dataKey="performanceScore" fill="hsl(var(--primary))" name="Performance Score">
              {data.map((entry, index) => (
                <text
                  key={`performance-score-${index}`} // Added key prop here
                  x={index * (100 / (data.length - 1)) + "%"}
                  y={300 - (entry.performanceScore * 300) / 100 - 10}
                  fill="hsl(var(--primary))"
                  textAnchor="middle"
                  dy={-6}
                  fontSize={12}
                >
                  {entry.performanceScore}
                </text>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Detailed Metrics (in seconds)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip  />
            <Legend />
            <Area
              type="monotone"
              dataKey="loadTime"
              fill="hsl(var(--primary) / 0.2)"
              stroke="hsl(var(--primary))"
              name="Load Time"
            />
            <Line
              type="monotone"
              dataKey="firstContentfulPaint"
              stroke="hsl(var(--secondary))"
              name="First Contentful Paint"
            />
            <Line type="monotone" dataKey="timeToInteractive" stroke="hsl(var(--accent))" name="Time to Interactive" />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
)

