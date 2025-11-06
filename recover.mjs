
import * as btc from "@scure/btc-signer"
import { hex } from "@scure/base"

const privateKey = hex.decode("HEX FROM UNISAT")

const internalKey = hex.decode("85177efc5af694a3583e19ba50b4cda2094815cafecde4034edc2b17deec6e5")
const tapMerkleRoot = hex.decode(`9d4615243d5778b1ea89c2e2e95755ad19fc007f85d699663ce27b2b51484278`)
const revealScript = hex.decode("5120ce5e759e864b5f936dbbec5a26404daf911cc31eb13c85bcc27fed24905632d5")

const recoveryTx = new btc.Transaction({ allowUnknownOutputs: true })

recoveryTx.addInput({
  txid: `8678f88937b6e10ca64fd3e44d2b7b6f9c59486db17b4411a4c372f40e25eca7`,
  index: 0,
  witnessUtxo: { script: revealScript, amount: BigInt(32180) },
  tapMerkleRoot: tapMerkleRoot,
  tapInternalKey: internalKey,
  sequence: 4294967293
})

recoveryTx.addOutputAddress(`bc1pnlpd80ccaqctvgxj9epssn4dgenjzcplgr2v6nd062vylxqdyafs6ed0qv`, 696n)
recoveryTx.addOutputAddress(`bc1pnlpd80ccaqctvgxj9epssn4dgenjzcplgr2v6nd062vylxqdyafs6ed0qv`, 31176n)

recoveryTx.sign(privateKey)
recoveryTx.finalize()

console.log(recoveryTx.hex)
