import { useWeb3React } from "@web3-react/core"
import UserInformation from "components/UserInformation"
import MetaMask from "components/wallet/Connectors/MetaMask"

export default function Home() {
  const { active, chainId } = useWeb3React()

  return (
    <div className="flex flex-col mx-auto my-16 space-y-20 lg:container lg:px-12">
      <hr />
      <h1>Hello World!</h1>
    </div>
  )
}
