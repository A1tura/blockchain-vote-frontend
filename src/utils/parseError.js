export function parseError(contract, error) {
  const revertData = error.data
  const decodedError = contract.interface.parseError(revertData)
  return decodedError.args[0]
}
