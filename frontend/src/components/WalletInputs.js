import React from "react";

function WalletInputs({chain, wallet, setChain, setWallet}) {

  return (
    <div className="WalletInputs">
			<img className="volna" src="Volna.png" alt=""></img>
			<div className="InputWallet">
				<div className="container">
					<div className="Input_Wallet_main">
						<div className="Input_left">
							<h1 className="InputTitle">Input a Wallet and Chain</h1>
							<div className="setText">
						
								<input className="inputText"
									placeholder="Input here" onChange={(e) => setWallet(e.target.value)}
									value={wallet}
								></input>
							</div>

							<div className="chain">
								<span> Set Chain </span>
								<select className="selection" onChange={(e) => setChain(e.target.value)} value={chain}>
									<option value="0x1">Mumbai TestNet</option>
									<option value="0x89">Polygon</option>
								</select>
							</div>
						</div>
						<div className="right_side">

						</div>
					</div>
					<div className="brr"></div>
				</div>
			</div>
    </div>
  );
}

export default WalletInputs;