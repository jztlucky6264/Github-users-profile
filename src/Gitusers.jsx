import axios from "axios";
import React, { useState, useEffect } from "react";
// import { FcApproval } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
const Gitusers = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
    return (
      <div>
        <h1 className="text-center">GITHUB USER PROFILE</h1>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1 className="text-center">GITHUB USER PROFILE</h1>
      </div>
      <div className="row  row-cols-1 m-md-5 m-4  ">
        <div className="row d-flex justify-content-center align-items-center  ">
          {data.map((client) => (
            <div
              className="card main_div d-flex flex-row  m-3  p-0"
              key={client.id}
              style={{ width: "18rem" }}
            >
              <img
                src={client.avatar_url}
                className="card-img-top w-50 h-50"
                alt="Loading..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <GoMarkGithub /> {client.login}
                </h5>
                <p className="card-text    ">
                  <a href={client.html_url}>Github profile</a>
                </p>

                <div className="container-fluid content_div text-center ">
                  <div className=" row ">
                    <div className="col d-flex flex-column">
                      <span className="Article">Following</span>
                      <span className="Number1">
                        {client.following_url.length}
                      </span>
                    </div>

                    <div className="col d-flex flex-column">
                      <span className="Follower m-1 m-md-2">Follower</span>
                      <span className="Number2">
                        {client.followers_url.length}
                      </span>
                    </div>
                    <div className="col d-flex flex-column ">
                      <span className="Rating m-1 m-md-2">Repos</span>
                      <span className="Number3">{client.repos_url.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Gitusers;
