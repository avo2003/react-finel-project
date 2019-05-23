import React, { useState, useEffect } from 'react';

import instagramApi from '../apis/instagramApi';

export default function Instagram({ match }) {
	const [insta, setInsta] = useState({});

    const instagramid = match.params.id;
    useEffect(() => {
        const getInsta = async () => {
            const response = await instagramApi.get(`/api/instagrams/${instagramid}`);
            setInsta(response.data);
        };
        getInsta();
    }, [instagramid]);

	return (
		<div>
        <div class="dd1">
          <div class="ww2">
            <div>
              <img class="aavatar" src={insta.avatar} />
            </div>
            <h1 class="sss3">
            
              {insta.name} {insta.username}
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img class="aa2" src={insta.img1} />
          <img class="aa2" src={insta.img2} />
          <img class="aa2" src={insta.img3} />
          <img class="aa2" src={insta.img4} />
          <img class="aa2" src={insta.img5} />
        </div>
      </div>
	);
}
