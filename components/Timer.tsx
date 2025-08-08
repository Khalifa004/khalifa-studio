"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from './ui/progress'


const POMODORO_TIME = 25 * 60 // 25 minutes in seconds
const SHORT_BREAK_TIME = 5 * 60 // 5 minutes in seconds

export default function PomodoroTimer() {
  const [time, setTime] = useState(POMODORO_TIME)
  const [isActive, setIsActive] = useState(false)
  const [isPomodoro, setIsPomodoro] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setIsActive(false)
      setIsPomodoro(!isPomodoro)
      setTime(isPomodoro ? SHORT_BREAK_TIME : POMODORO_TIME)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, time, isPomodoro])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTime(isPomodoro ? POMODORO_TIME : SHORT_BREAK_TIME)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const progress = isPomodoro
    ? ((POMODORO_TIME - time) / POMODORO_TIME) * 100
    : ((SHORT_BREAK_TIME - time) / SHORT_BREAK_TIME) * 100

  return (
    <Card className="bg-gray-800 w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-emerald-400">
            {isPomodoro ? 'Pomodoro' : 'Short Break'}
          </h3>
        </div>
        <div className="relative">
          <Progress value={progress} className="h-4" />
          <AnimatePresence mode="wait">
            <motion.div
              key={time}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-6xl font-bold text-center my-8"
            >
              {formatTime(time)}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <Button onClick={toggleTimer} size="lg">
            {isActive ? <FaPause /> : <FaPlay />}
          </Button>
          <Button onClick={resetTimer} size="lg" variant="outline">
            <FaRedo />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

