import React from "react";
import axios from "axios";

function Tokens({wallet, chain, tokens, setTokens}) {


  async function getTokenBalances() {
    const response = await axios.get("http://localhost:8081/tokenBalances", {
      params: {
        address: wallet,
        chain: chain,
      },
    });

    if (response.data) {
      tokenProcessing(response.data);
    }
  }

  function tokenProcessing(t) {
    for (let i = 0; i < t.length; i++) {
      t[i].bal = (Number(t[i].balance) / Number(`1E${t[i].decimals}`)).toFixed(3);  //1E18
      t[i].val = ((Number(t[i].balance) / Number(`1E${t[i].decimals}`)) * Number(t[i].usd)).toFixed(2);
    }
    setTokens(t);
  }

  return (
    <div className="Tokens">
			<div className="container">
				<div className="Tokens_main">
				<h1 className="h33">Get Tokens</h1>
						<p>
							<button className="btn get" onClick={getTokenBalances}>Get Tokens</button>
							<br />
							{tokens.length > 0 &&
								tokens.map((e) => {
									return (
										<>
										<div className="TokenNftGEt">
											<span>
												{e.symbol} {e.bal}, (${e.val})
											</span>
											<br />
											</div>
										</>
									);
								})}
						</p>
					</div>
			</div>
    </div>
  );
}

export default Tokens;