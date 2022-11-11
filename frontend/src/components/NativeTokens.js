import React, { useEffect } from "react";
import axios from "axios";

function NativeTokens({ wallet, chain, nativeBalance, setNativeBalance, nativeValue, setNativeValue  }) {

	useEffect(() =>{
		document.addEventListener('keydown', detectKeyDown, true)
	}
	,[]
	)
	
	const detectKeyDown =(e) => {
		console.log("clicked Key:" + e.key)
		if (e.key === "Enter") {
			e.preventDefault();
			getNativeBalance();
		}
	}

  async function getNativeBalance() {
    const response = await axios.get("http://localhost:8081/nativeBalance", {
      params: {
        address: wallet,
        chain: chain,
      },
    });
    console.log(response);
    if (response.data.balance && response.data.usd) {
      setNativeBalance((Number(response.data.balance) / 1e18).toFixed(3));
      setNativeValue(((Number(response.data.balance) / 1e18) * Number(response.data.usd)).toFixed(2));
    }
  }

  return (
    <div className="NativeTokens">
			<div className="container">
				<div className="NativeTokensMain">
		
					<h1 className="h33">Fetch Tokens</h1>
					<p>
						<div className="btn fetch" onClick={getNativeBalance}>Fetch Balance</div>
						<br />
						<div className="ShowBalance">
							Native Balance: {nativeBalance}, (${nativeValue})
						</div>
					</p>
				</div>
				
			</div>
    </div>
  );
}

export default NativeTokens;