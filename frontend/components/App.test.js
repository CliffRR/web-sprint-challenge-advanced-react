import React from 'react'
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import AppFunctional from "./AppFunctional"


beforeEach(()=>{
  render(<AppFunctional />)
})

describe('<AppFunctional />', () => {
  test("Looking to see if button#up exists", () => {
    const Heading3 = screen.getByText("UP") 
    expect(Heading3).toBeInTheDocument()
    expect(Heading3).toBeVisible()
  })

  test("Looking to see if h3#coordinates exists", () => {
    const Heading3 = screen.getByText("You moved 0 times") 
    expect(Heading3).toBeInTheDocument()
    expect(Heading3).toBeVisible()
  })

  test("Looking to see if button#right exists", () => {
    const Heading3 = screen.getByText("RIGHT") 
    expect(Heading3).toBeInTheDocument()
    expect(Heading3).toBeVisible()
  })

  test("Looking to see if button#reset exists", () => {
    const Heading3 = screen.getByText("reset") 
    expect(Heading3).toBeInTheDocument()
    expect(Heading3).toBeVisible()
  })

  test("Looking to see if button#left exists", () => {
    const Heading3 = screen.getByText("LEFT") 
    expect(Heading3).toBeInTheDocument()
    expect(Heading3).toBeVisible()
  })

})


