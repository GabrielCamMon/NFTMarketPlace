import { useState } from "react";
import logo from "./logo.png";

const Home = (marketplace, nft) => {
  const [item, setItem] = useState([]);
  const loadMarketplaceItems = async () => {
    const itemCount = await marketplace.itemCount();
    let items = [];
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i);
      if (!item.sold) {
        //get uir from nft contract
        const uri = await nft.tokenURI(item.tokenId);
      }
    }
  };
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mx-auto mt-5">
              <a
                href="http://www.dappuniversity.com/bootcamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} className="App-logo" alt="logo" />
              </a>
              <h1 className="mt-5">Dapp University Starter Kit</h1>
              <p>
                Edit <code>src/frontend/components/App.js</code> and save to
                reload.
              </p>
              <a
                className="App-link"
                href="http://www.dappuniversity.com/bootcamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                LEARN BLOCKCHAIN{" "}
                <u>
                  <b>NOW! </b>
                </u>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
