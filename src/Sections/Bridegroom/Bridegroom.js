import React, { Component, Fragment } from "react";
import { Seperator } from "../../Seperator";
import { Bridegroomsocialmedia } from "./Bridegroomsocialmedia";

export class Bridegroom extends Component {
  render() {
    var persons = [
      {
        id: 1,
        name: "Ankita Sarkar",
        socialMedia: { fb: "https://www.facebook.com/adrita.sharma.5", insta: "", linkedIn: "" },
        imagename: "ankita.jpg",
        description: `Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts. Separated
        they live in Bookmarksgrove right at the coast of the Semantics, a
        large language ocean.`
      },
      {
        id: 2,
        name: "Krishanu Dey",
        socialMedia: { fb: "", insta: "", linkedIn: "" },
        imagename: "krishanu.jpg",
        description: `Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts. Separated
        they live in Bookmarksgrove right at the coast of the Semantics, a
        large language ocean.`
      },
    ];
    return (
      <Fragment>
        <h2 className="section-header">Bride & Groom</h2>
        <Seperator />

        {persons.map((item, i) => {
          return (
            <div className="row" key={i}>
              <div className="col-7 mx-auto">
                <h3 className="bridegroom-name item-heading">{item.name}</h3>
                <img
                  src={process.env.PUBLIC_URL + "images/" + item.imagename}
                  className="bridegroom-image rounded-circle img-thumbnail"
                ></img>
              </div>
              <div className="col-12 bride-groom-description">
                {item.description}
              </div>
              <div className="col-lg-4 col-md-8 mx-auto">
                <Bridegroomsocialmedia socialMedia={item.socialMedia} />
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}