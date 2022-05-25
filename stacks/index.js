import { StorageStack } from "./StorageStack"
import { ApiStack } from "./ApiStack"

export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x",
    srcPath: "src/backend",
    bundle: {
      format: "esm",
    },
  })

  if (!["prod", "stage"].includes(app.stage)) app.setDefaultRemovalPolicy("destroy")

  app.stack(StorageStack).stack(ApiStack)
}
