import React from "react";
import response from "../response.json";

export default function Cards() {
  return (
    <>
      {response.map((data) => {
        return (
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  {data.plan}
                </h5>
                <h6 className="card-price text-center">
                  {data.price}
                  <span className="period">/month</span>
                </h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {data.f1}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {data.f2}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>
                  <li className={data.plan !== "FREE" ? "null" : "text-muted"}>
                    <span className="fa-li">
                      <i
                        className={`fas ${
                          data.plan !== "FREE" ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li className={data.plan !== "FREE" ? "null" : "text-muted"}>
                    <span className="fa-li">
                      <i
                        className={`fas ${
                          data.plan !== "FREE" ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li className={data.plan !== "FREE" ? "null" : "text-muted"}>
                    <span className="fa-li">
                      <i
                        className={`fas ${
                          data.plan !== "FREE" ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </span>
                    Free Subdomain
                  </li>
                  <li className={data.plan === "PRO" ? "null" : "text-muted"}>
                    <span className="fa-li">
                      <i
                        className={`fas ${
                          data.plan === "PRO" ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
