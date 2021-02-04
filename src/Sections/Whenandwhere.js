import React, { Component, Fragment } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
export class Whenandwhere extends Component {
  render() {
    // const GoogleMapExample = withGoogleMap((props) => (
    //   <GoogleMap
    //     defaultCenter={{ lat: props.lat, lng: props.lng }}
    //     defaultZoom={13}
    //     text="My Marker"
    //   >
    //     {props.isMarkerShown && (
    //       <Marker position={{ lat: props.lat, lng: props.lng }} />
    //     )}
    //   </GoogleMap>
    // ));

    var locations = [
      {
        eventName: "Wedding",
        location:
          "45/46 RG Baruah Road, Zoo Rd, Tiniali, Guwahati, Assam 781024",
        lat: 26.144518,
        lng: 91.736237,
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.79535001261!2d91.74975601502868!3d26.138214883467267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5be326f6ad57%3A0x92660338e7b7c50b!2sAndhu%20Rabha%20Path%2C%20Odalbakra%2C%20Kahilipara%2C%20Guwahati%2C%20Assam%20781034!5e0!3m2!1sen!2sin!4v1612437687186!5m2!1sen!2sin" 
      },
      {
        eventName: "Reception",
        location:
          "Rail Colony DIMAPUR, NAGALAND (NL), India (IN), Pin Code:- 797112",
        lat: 25.862989,
        lng: 93.75367,
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.9427570513544!2d93.72608381502386!3d25.904252233572276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3745e1f402a8e455%3A0x69b908ca1ee4f4c1!2sRam%20Thakur%20Mandir%2C%20Railway%20Colony%2C%20Dimapur%2C%20Nagaland%20797112!5e0!3m2!1sen!2sin!4v1612436144629!5m2!1sen!2sin"
      },
    ];

    return (
      <Fragment>
        <section className="when-and-where">
          <div className="row">
            {locations.map((item, i) => {
              return (
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-header ">{item.eventName}</div>
                    <div className="card-body">
                      <div className="address"> {item.location}</div>
                      <div>
                      <iframe src={item.map} className="location-frame"  frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabindex="0"></iframe>

                        {/* <GoogleMapExample
                          containerElement={<div style={{ height: `500px` }} />}
                          mapElement={<div style={{ height: `100%` }} />}
                          isMarkerShown={true}
                          lat={item.lat}
                          lng={item.lng}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Fragment>
    );
  }
}
