import * as fs from "fs-extra"
import prependRuleIdsAtLines from "./prependRuleIdsAtLines"

export default async function updateFile(
  result: NormalizedResult,
  addFixMe: boolean,
  fixMeMessage: string,
) {
  const { filePath, messagesByLine } = result

  const sourceFile = await fs.readFile(filePath)
  const newSource = prependRuleIdsAtLines({
    source: sourceFile.toString(),
    insertions: messagesByLine,
    addFixMe,
    fixMeMessage,
  })

  await fs.writeFile(filePath, newSource)
}
