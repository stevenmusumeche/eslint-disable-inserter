import { legacyFunction } from "./legacy-file"

const main: Function = () => {
  let legacyOutput = legacyFunction()
  // eslint-disable-next-line eqeqeq
  if (legacyOutput == 0) console.log("the legacy function is operational")
}
