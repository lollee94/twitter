import Nweet from "components/Nweet";
import { dbService, storageService } from "fbase";
import React, {useEffect, useState} from "react";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
    console.log(userObj)
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

    /*
    const getNweets = async () => {
      const dbNweets = await dbService.collection("nweets").get()
      dbNweets.forEach((document) => {
        const nweetObject = {
            ...document.data(),
            id: document.id,
        };
        setNweets(prev => [nweetObject, ...prev]);
      });  
    };
    */

    useEffect(() => {
        // 구식 방법 getNweets();
        dbService.collection("nweets").onSnapshot(snapshot => {
            //console.log("something happend");

            const nweetArray = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setNweets(nweetArray);
        })
    }, []);


    return(
    <div className="container">
        <NweetFactory userObj={userObj} />
        <div style={{ marginTop: 30 }}>
            {nweets.map((nweet) => (
                <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.craetorId === userObj.uid}/>
            ))}
        </div>
    </div>
    );
};

<span>Home</span>;
export default Home;