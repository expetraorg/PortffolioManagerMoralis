import "./App.css";
import { useState } from "react";
import NativeTokens from "./components/NativeTokens";
import Tokens from "./components/Tokens";
import TransferHistory from "./components/TransferHistory";
import Nfts from "./components/Nfts";
import WalletInputs from "./components/WalletInputs.js";
import PortfolioValue from "./components/PortfolioValue";
import React, { Component }  from 'react';


function App() {
	const [wallet, setWallet] = useState("");
  const [chain, setChain] = useState("0x1");
  const [nativeBalance, setNativeBalance] = useState(0);
  const [nativeValue, setNativeValue] = useState(0);
  const [tokens, setTokens] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [transfers, setTransfers] = useState([]);

	

	
	
  return (
    <div className="App">

			<div id="Home" className="header">

				<img className="header_right" src="phones2.png" alt = ""></img>
				 <img className="header_blueback" src="NFT2.png" alt = ""></img>
	
				<img className="py" src="NFT3.png" alt = ""></img>
						
				<img className="back_st" src="NFT4.png" alt = ""></img>
		
				<img className="back_Al" src="NFT5.png" alt = ""></img>
					
				<img className="st" src="NFT6.png" alt = ""></img>
				<img className="last" src="last.png" alt = ""></img>

		
				<div className="header-top">
						<div className="fix">
						<div className="header-top-top">
							<div className="header-top__logo">
								<img src="NFT8.png" alt="logo"></img>
							</div>
							<div className="header-top__right">
								<ul className="nav1">
									<a name = "inputWall" href="#inputWall">
									<li className="haeder-top__list">Wallet</li>
									</a>
									<a href="#Dream_team">
									<li className="haeder-top__list">App Features</li>
									</a>
									<a href="#Folllow">
									<li className="haeder-top__list">Contacts</li>
									</a>
								</ul>
								<div className="header_top_btn btn">
									Download app
								</div>
							</div>
						</div>
						</div>
						
						<div className="container">
						<div className="header-top__main">
							<p className="top-subtitle">
								Expetra
							</p>
							<h1 className="top-title">Web 3 <br></br>  budget<br></br>  tracker</h1>
							<p className="top-title__title">
							With expetra you can manage your finances both in fiat and crypto!
							</p>
							<div className="top-btn btn">
									Download app
							</div>
							
							
						</div>
					</div>
				</div>

			</div>
			

			<section id = "inputWall">
			<WalletInputs 
					chain={chain}
					setChain={setChain}
					wallet={wallet}
					setWallet={setWallet}
				/>
			</section>

		<div className="functionsOur">
			<div className="container">
				<div className="mainFunctions">
					<div className="mainFunctions_top">

				<div className="left_side_L">
					<img className="ice_cream" alt="ice-cream" src="шсу.png"></img>
					<img className="MonaLisa" alt="Mona Lisa" src="шсу.png"></img>
					<NativeTokens
							wallet={wallet}
							chain={chain}
							nativeBalance={nativeBalance}
							setNativeBalance={setNativeBalance}
							nativeValue={nativeValue}
							setNativeValue={setNativeValue}
						/>
						
					<PortfolioValue 
						nativeValue={nativeValue}
						tokens={tokens}  
					/>
					</div>	
				
				
					
				
			
				</div>
				<div className="TokensCenter">
							<Tokens
								wallet={wallet} 
								chain={chain}
								tokens={tokens}
								setTokens={setTokens} />
						</div>
					<div className="bottomFunction">
					<TransferHistory 
						chain={chain} 
						wallet={wallet}
						transfers={transfers}
						setTransfers={setTransfers}
					/>
						
						</div>
						<div className="NFTSec">
							<Nfts 
								wallet={wallet} 
								chain={chain}
								nfts={nfts}
								setNfts={setNfts}
								filteredNfts={filteredNfts}
								setFilteredNfts={setFilteredNfts}
							/> 
						</div>
					</div>

			</div>
				<div className="brr"></div>
			</div>
		
			<img className="Rvolna" alt="volna" src = "Rvolna.png"></img>

			<div id = "Dream_team" className="dream_team">
				<div className="container">
							<h1 className="dream_team_h1">
								App Features
							</h1>
							<div className="sides">
								<div className="left_side">
									<h3 className="dream_team_title h33">
										Innovational way to track <br></br> 
										personal finances and earn!
									</h3>
									<p className="dream_team_subtitle">
									Budgeting  |   Analytics   |  GameFi
									<br></br> <img className="imgIcon"  src="budgeting.png" alt=""></img> 
									<img className="imgIcon"  src="analytics.png" alt=""></img> 
									<img className="imgIcon"  src="gamefi.png" alt=""></img> 
									</p>
								</div>
						
								<div className="right_side">
									<img className="imgTeam" src="Aruzhan.png" alt=""></img>
									<img className="imgTeam" src="Tamer.png" alt=""></img>
									<img className="imgTeam" src="Aldik.png" alt=""></img>
									<img className="imgTeam" src="Maga.png" alt=""></img>
								</div>
							</div>
						</div>
					</div>

					<div id = "Folllow" className="footer">
							<img className="footerImg" src="footer.png" alt="footer"></img>
							<div className="backFooter">
								<img className="decorFooter" alt="" src="footerDecor.png"></img>
							<div className="container">
								<div className="fotter">
									<div className="headerOfFooter">
										<h1 className="InputTitle h11"> Contacts: </h1>
										<h1 className="NavigationAdvance">Pages:</h1>
									</div>
									<div className="brr brFooter"></div>
									<div className="navFooter">
										<ul className="footerList">

											
												<li className="nav_list1">Discord</li>
											

											
											<li className="nav_list1">Twitter</li>
											
											
											<li className="nav_list1">Instagram</li>
												
										</ul>
										<ul className="right_nav">

										<a href="#Home">

											<li className="nav_list">Home</li>
											</a>
											<a href="#Dream_team">
											<li className="nav_list">App Features</li>
											</a>
											<a href="#inputWall">
											<li className="nav_list">Wallet portolio</li>
											</a>
											
										</ul>
									</div>
									<div className="brr brFooter1"></div>
									<div className="Power">
										<p className="powered">Powered by expetra.org portfolio manager</p>
										<p className="powered">.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
    </div>
  );
}

export default App;
