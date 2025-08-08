"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import styles from "@/styles/components/common/HotTopics.module.scss"

interface Topic {
  id: string
  title: string
  users: number
  color: string
}

interface TwoRowInfiniteTopicsProps {
  topics?: Topic[]
  defaultOpen?: boolean
}

const defaultTopics: Topic[] = [
  { id: "1", title: "Category", users: 12456, color: styles.bgRed400 },
  { id: "2", title: "Business", users: 1220, color: styles.bgGreen500 },
  { id: "3", title: "Graphic Design", users: 12456, color: styles.bgOrange500 },
  { id: "4", title: "Chemistry", users: 1220, color: styles.bgPurple700 },
  { id: "5", title: "Computer Science", users: 12456, color: styles.bgBlue600 },
  { id: "6", title: "Mathematics", users: 50234, color: styles.bgBlue300 },
]

const TwoRowInfiniteTopics: React.FC<TwoRowInfiniteTopicsProps> = ({ topics = defaultTopics, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [titleOpacity, setTitleOpacity] = useState(1)
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isTransitioning) {
      setTitleOpacity(0)
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setTitleOpacity(1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  useEffect(() => {
    if (isOpen && containerRef.current && !isPaused) {
      const container = containerRef.current
      const totalHeight = container.scrollHeight / 2
      const scrollSpeed = 0.7
      const scrollDelay = 16
  
      let animationId: number
      let isHovering = false
  
      const animationFrame = () => {
        if (!isHovering) {
          setScrollPosition((prevPosition) => {
            const newPosition = (prevPosition + scrollSpeed) % totalHeight
            container.scrollTop = newPosition
            return newPosition
          })
        }
        animationId = window.setTimeout(() => requestAnimationFrame(animationFrame), scrollDelay)
      }
  
      const handleMouseEnter = () => {
        isHovering = true
      }
  
      const handleMouseLeave = () => {
        isHovering = false
      }
  
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
  
      animationFrame()
  
      return () => {
        window.clearTimeout(animationId)
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [isOpen, isPaused])
  

  const handleToggle = (event: React.MouseEvent) => {
    event.preventDefault()
    setIsTransitioning(true)
    setIsOpen(!isOpen)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div className={styles.container}>
      <div className={cn(styles.titleContainer, isOpen ? styles.titleOpen : styles.titleClosed)} onClick={handleToggle}>
        <ChevronRight className={cn(styles.chevron, isOpen ? styles.chevronOpen : styles.chevronClosed)} />
        <h1
          className={cn(styles.title, isOpen ? styles.titleGradientOpen : styles.titleGradientClosed)}
          style={{ opacity: titleOpacity }}
        >
          Intellitopics
        </h1>
      </div>

      <div
        className={cn(
          styles.topicsContainer,
          isOpen ? styles.topicsOpen : styles.topicsClosed,
          styles.fadeBottom,
          styles.fadeTop,
        )}
        ref={containerRef}
        style={{ overflowY: "hidden", height: isOpen ? "670px" : "0" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${styles.topicsWrapper} ${styles.staircaseGrid}`}>
          {[...topics, ...topics].map((topic, index) => (
            <div key={`${topic.id}-${index}`} className={cn(styles.topicCard, topic.color)}>
              <div className={styles.topicContent}>
                <h3 className={styles.topicTitle}>{topic.title}</h3>

                <div className={styles.userCount}>
                  <span className={styles.userNumber}>{topic.users.toLocaleString()}</span>
                  <span className={styles.userLabel}>Users</span>
                </div>

                <div className={styles.topicActions}>
                  <button className={styles.addButton}>
                    <Plus className={styles.addIcon} />
                  </button>
                  <Link href={`/topic/${topic.id}`} className={styles.viewCoursesButton}>
                    View Courses
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TwoRowInfiniteTopics

