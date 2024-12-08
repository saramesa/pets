import "@testing-library/jest-dom"
import { cleanup } from "@testing-library/react"

beforeEach(() => {
    jest.clearAllMocks()
  })
  

  afterEach(() => {
    cleanup()
  })