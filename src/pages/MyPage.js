import React, { useState, useEffect } from "react";
import "../App.css";
import "../Form.css";
export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); /*tarnale esksav */

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/instagrams");
        const users = await response.json();
        setData(users[1]);
        setIsLoading(false); /* tarnale verchantsav  */
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const renderUser = () => {
    if (isLoading)
      return (
        <div>
          <img src="https://thumbs.gfycat.com/UnitedSmartBinturong-small.gif" />
        </div>
      );

    return (
      <div>
        <div class="dd1">
          <div class="ww2">
            <div>
              <img class="aavatar" src={data.avatar} />
            </div>
            <h1 class="sss3">
            
              {data.name} {data.username}
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img class="aa2" src={data.img1} />
          <img class="aa2" src={data.img2} />
          <img class="aa2" src={data.img3} />
          <img class="aa2" src={data.img4} />
          <img class="aa2" src={data.img5} />
        </div>
      </div>
    );
  };
  return <div>{renderUser()}</div>;
}
