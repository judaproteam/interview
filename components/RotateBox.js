"use client"

import { useEffect, useRef } from "react"

export default function RotateBox() {
  const ref = useRef()
  let radius, center_x, center_y
  useEffect(() => {
    ref.current.addEventListener("mousedown", rotate)
  }, [])

  function rotate() {
    radius = ref.current.offsetWidth / 2
    center_x = ref.current.offsetLeft + radius
    center_y = ref.current.offsetTop + radius

    const click_degrees = get_degrees(event.pageX, event.pageY)

    window.addEventListener("mousemove", function (event) {
      const degrees = get_degrees(event.pageX, event.pageY) - click_degrees
      const transform = "rotate(" + degrees + "deg)"

      ref.current.style.transform = transform
    })
  }

  function get_degrees(mouse_x, mouse_y) {
    const radians = Math.atan2(mouse_x - center_x, mouse_y - center_y)
    const degrees = Math.round(radians * (180 / Math.PI) * -1 + 100)

    return degrees
  }

  return <div ref={ref} className="size-20 bg-black m-8" />
}
