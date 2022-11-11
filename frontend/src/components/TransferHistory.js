import React from "react";
import axios from "axios";

function TransferHistory({ chain, wallet, transfers, setTransfers }) {

  async function getTokenTransfers() {
    const response = await axios.get("http://localhost:8081/tokenTransfers", {
      params: {
        address: wallet,
        chain: chain,
      },
    });

    if (response.data) {
      setTransfers(response.data);
      console.log(response.data);
    }
  }

  return (
    <div className="Transfer">
      <h1 className="h33 Transferh1">Transfer History</h1>
      <div>
        <div className="btn transfer" onClick={getTokenTransfers}>Fetch Transfers</div>
				
        <table>
					
				<div className="backTransfer">
          

			
          {transfers.length > 0 &&
            transfers.map((e) => {
              return (
                <tr>
								<div className="tables667">
					<tr className="headerOFTransfer">
						<div className="TB_data1"><th>Token</th></div>
						<div className="poloska"></div>
            <div className="TB_data2"><th>Amount</th></div>
						<div className="poloska"></div>
						<div className="TB_data3"><th>From</th></div>
						<div className="poloska"></div>
						<div className="TB_data4"><th>To</th></div>
						<div className="poloska"></div>
						<div className="TB_data"><th>Date</th></div>
				
          </tr>
                  <tr className="xx">

										<div className="TbData1">
											<td >{e.symbol}</td>
										</div>
										<div className="poloska"></div>
										

										<div className="TbData2">
											<td>
												{(Number(e.value) / Number(`1e${e.decimals}`)).toFixed(3)}
											</td>
										</div>
										<div className="poloska"></div>

										<div className="TbData3">
                  		<td>{e.from_address}</td>
										</div>
										<div className="poloska"></div>

										<div className="TbData4">
              		    <td>{e.to_address}</td>
										</div>
										<div className="poloska"></div>

										<div className="TbData">
                 		 <td>{e.block_timestamp}</td>
										</div>
						

									</tr>
									</div>
                </tr>
              );
            })}

						</div>

        </table>
      </div>
    </div>
  );
}

export default TransferHistory;