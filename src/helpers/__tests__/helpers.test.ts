import { normalizeTelNo, calculateAge } from "../helpers"
// jest.mock(() => {
//   Date: fn((x) => x ? new Date(x) : )
// })

describe("normalizeTelNo", () => {
  it("normalizeTelNo", () => {
    expect(normalizeTelNo("+31 (0) 6 2717 4881")).toEqual("31627174881")
  })
})

// describe("calculateAge", () => {
//   it("", () => {
//     const tree = renderer.create(<Header location={location} />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })
