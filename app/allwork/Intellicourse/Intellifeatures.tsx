"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Cpu, Database, Check, Users, Star, Sparkles, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bigtext } from "@/components/bigtext"

const accentColor = "#18ACFE"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ElementType
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => (
  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
    <Card className="overflow-hidden border border-gray-200 hover:shadow-md transition-all bg-white h-full">
      <CardContent className="p-5 flex flex-row gap-4 items-start h-full">
        <div className="shrink-0 rounded-md bg-gray-100 p-3">
          <Icon className="w-6 h-6 text-[#18ACFE]" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1 text-gray-900">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

const Intellifeatures: React.FC = () => {
  return (
    <div className={cn("min-h-screen bg-gradient-to-b from-background to-muted text-foreground")}>
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Technical Implementation Highlights</h2>
          <Tabs defaultValue="ui" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-4 mb-12">
              <TabsTrigger value="ui" className="hover:text-[#18ACFE] transition-colors text-xl">
                UI Architecture
              </TabsTrigger>
              <TabsTrigger value="performance" className="hover:text-[#18ACFE] transition-colors text-xl">
                Performance
              </TabsTrigger>
              <TabsTrigger value="accessibility" className="hover:text-[#18ACFE] transition-colors text-xl">
                Accessibility
              </TabsTrigger>
              <TabsTrigger value="analytics" className="hover:text-[#18ACFE] transition-colors text-xl">
                Analytics & Insights
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              {/* UI Architecture */}
              <TabsContent value="ui">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <FeatureCard 
                    title="Component-driven system"
                    description="Composable components with clear props, slot patterns, and variant-driven styles."
                    icon={Database}
                  />
                  <FeatureCard 
                    title="App Router & RSC boundaries"
                    description="Layout composition with server components by default; client islands where interaction is required."
                    icon={Cpu}
                  />
                  <FeatureCard 
                    title="Form architecture"
                    description="Multi-step flows with field-level validation, error surfaces, and controlled inputs."
                    icon={Check}
                  />
                </motion.div>
              </TabsContent>

              {/* Performance */}
              <TabsContent value="performance">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <FeatureCard 
                    title="Code-splitting & dynamic import"
                    description="Route-based and component-level splitting with lazy loading for non-critical UI."
                    icon={Zap}
                  />
                  <FeatureCard 
                    title="Responsive images"
                    description="Next/Image with proper sizes and fill to reduce LCP and bandwidth."
                    icon={Database}
                  />
                  <FeatureCard 
                    title="In-view rendering"
                    description="IntersectionObserver-driven reveals and deferral of offscreen work."
                    icon={Sparkles}
                  />
                </motion.div>
              </TabsContent>

              {/* Accessibility */}
              <TabsContent value="accessibility">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <FeatureCard 
                    title="Semantic structure"
                    description="Landmarks, heading hierarchy, and ARIA labels for assistive tech."
                    icon={Check}
                  />
                  <FeatureCard 
                    title="Focus & keyboard support"
                    description="Visible focus states, focus traps for modals, and tab order review."
                    icon={Check}
                  />
                  <FeatureCard 
                    title="Motion preferences"
                    description="Reduced-motion fallbacks; time-bounded transitions and safe easing."
                    icon={Zap}
                  />
                </motion.div>
              </TabsContent>

              {/* Analytics & Insights */}
              <TabsContent value="analytics">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <FeatureCard 
                    title="Event hooks"
                    description="Client-side hooks to emit screen and action events for funnels."
                    icon={BarChart3}
                  />
                  <FeatureCard 
                    title="Performance marks"
                    description="Custom marks/measures to correlate UI interactions with timing."
                    icon={Zap}
                  />
                  <FeatureCard 
                    title="Dashboard-ready payloads"
                    description="Normalized event shape for easy aggregation and charting."
                    icon={Database}
                  />
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>

          <div className="flex justify-center mt-12">
          {/* <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-xl">
        <span className="mr-2 text-[#18ACFE]">●</span>  Explore IntelliCourse
      </div> */}
        
          </div>
        </div>

        <Bigtext/>
        
      </section>
    </div>
  )
}

export default Intellifeatures
