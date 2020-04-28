import React from "react"
import renderer from "react-test-renderer"
import Button from "./button"

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button title="Default Starter" onClick={() => console.log('a')} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})