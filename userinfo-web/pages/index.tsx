import { useWeb3React } from "@web3-react/core"
import UserInformation from "components/UserInformation"
import MetaMask from "components/wallet/Connectors/MetaMask"
import { MyOracle__factory } from '../generated/typechain/factories/MyOracle__factory'
import { MyOracle, MySimpleContract, MySimpleContract__factory } from 'generated/typechain'

export default function Home() {
  const { active, chainId } = useWeb3React()
  const myOracleContractFactory = new MyOracle__factory().attach('0x5ea8674728ed4d26a52514f0ecb16c5e429fb448')
  const simpleContractFactory = new MySimpleContract__factory().attach('0x4a012c0c1e7b5834188787a70fe337e3d2c46154')

  return (
    <div className="flex flex-col mx-auto my-16 space-y-20 lg:container lg:px-12">
      <div className="mx-auto">
        <MetaMask />
      </div>
      <hr />
      {!active ? (
        <span>Please connect to wallet. (@IoTeX Testnet)</span>
      ) : !(chainId == 4690) ? (
        <span>Please change network to IoTeX Testnet.</span>
      ) : (
        <UserInformation />
      )}
    </div>
  )
}
