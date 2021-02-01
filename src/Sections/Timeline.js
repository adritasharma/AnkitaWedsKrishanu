import React, { Component, Fragment } from "react";

export class Timeline extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card wedding-timeline">
            <div className="card-body">
              <h4 className="card-title mb-5 item-heading">Timeline</h4>

              <div className="hori-timeline" dir="ltr">
                <ul className="list-inline events">
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div className="event-date bg-soft-success text-success">
                        27 June
                      </div>
                      <h4 className="font-size-16 ceremony ceremony-mehendi">
                        Mehendi
                      </h4>
                      <p className="text-muted">
                        Mehndi on bride's hands will bring positive spirits and
                        good luck
                      </p>
                      <div>
                        <a href="#" className="btn btn-primary btn-sm">
                          Read more
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div className="event-date bg-soft-warning text-warning">
                        28 June
                      </div>
                      <h4 className="font-size-16 ceremony ceremony-haldi">
                        Haldi
                      </h4>
                      <p className="text-muted">
                        Haldi purifies and cleanses the body and has the power
                        to ward off evil spirits
                      </p>
                      <div>
                        <a href="#" className="btn btn-primary btn-sm">
                          Read more
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div className="event-date bg-soft-danger text-danger">
                        7 June
                      </div>
                      <h4 className="font-size-16 ceremony ceremony-wedding">
                        Wedding
                      </h4>
                      <p className="text-muted">
                        The Bride and Groom will be committed to take care of
                        each other.
                      </p>
                      <div>
                        <a href="#" className="btn btn-primary btn-sm">
                          Read more
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div className="event-date bg-soft-info text-info">
                        8 June
                      </div>
                      <h4 className="font-size-16 ceremony ceremony-reception">
                        Reception
                      </h4>
                      <p className="text-muted">
                        Languages only differ in their pronunciation and their
                        most common words.
                      </p>
                      <div>
                        <img
                        width="100"
                        height="100"
                          src={
                            process.env.PUBLIC_URL + "images/" + "mehendi.png"
                          }
                          className="bridegroom-image rounded-circle img-thumbnail"
                        ></img>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
