import React, { Component, Fragment } from "react";

export class Timeline extends Component {
  render() {
    var events = [
      {
        dateString: "27 June",
        eventName: "Mehendi",
        eventDesc: `Mehndi on bride's hands will bring positive spirits and
    good luck`,
        eventKey: "mehendi",
        eventClass: "success",
      },
      {
        dateString: "28 June",
        eventName: "Haldi",
        eventDesc: `Haldi purifies the body and has the power to ward off evil spirits`,
        eventKey: "haldi",
        eventClass: "warning",
      },
      {
        dateString: "28 June",
        eventName: "Wedding",
        eventDesc: `The Bride and Groom will be committed to take care of
        each other`,
        eventKey: "wedding",
        eventClass: "danger",
      },
      {
        dateString: "30 June",
        eventName: "Reception",
        eventDesc: `Mehndi on bride's hands will bring positive spirits and
    good luck`,
        eventKey: "reception",
        eventClass: "info",
      },
    ];

    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card wedding-timeline" id="wedding-timeline">
            <div className="card-body">
              <h4 className="card-title mb-5 section-header">Events</h4>

              <div className="hori-timeline" dir="ltr">
                <ul className="list-inline events">
                  {events.map((item, i) => {
                    return (
                      <li className="list-inline-item event-list">
                        <div className="px-4">
                          <div
                            className={`event-date bg-soft-${item.eventClass} text-${item.eventClass}`}
                          >
                            {item.dateString}
                          </div>
                          <h4
                            className={`font-size-16 ceremony ceremony-${item.eventKey}`}
                          >
                            {item.eventName}
                          </h4>
                          <img
                            width="100"
                            height="100"
                            src={
                              process.env.PUBLIC_URL + "/images/" + item.eventKey +".PNG"
                            }
                            className={`${item.eventKey}-image event-image rounded-circle img-thumbnail`}
                          ></img>
                          <p className={`ceremont-text ceremony-${item.eventKey}-text`}>{item.eventDesc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
