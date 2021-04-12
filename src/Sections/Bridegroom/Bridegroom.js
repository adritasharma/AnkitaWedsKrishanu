import React, { Component, Fragment } from "react";
import { Seperator } from "../../Seperator";
import { Bridegroomsocialmedia } from "./Bridegroomsocialmedia";

export class Bridegroom extends Component {
  render() {
    var persons = [
      {
        id: 1,
        name: "Ankita Sarkar",
        socialMedia:
        {
          fb: "https://www.facebook.com/ankita.sarkar.585",
          insta: "https://www.instagram.com/__ankitasarkar__/",
          linkedIn: "https://www.linkedin.com/in/ankita-sarkar-838199113/"
        },
        imagename: "ankita.jpg",
        description: `Need Help!!!!!!!!!!!!`
      },
      {
        id: 2,
        name: "Krishanu Dey",
        socialMedia: {
          fb: "https://www.facebook.com/profile.php?id=100003324943257",
          insta: "https://www.instagram.com/krishanu___/",
          linkedIn: "https://www.linkedin.com/in/krishanu-dey-a20333136/"
        },
        imagename: "krishanu.jpg",
        description: `Krishanu is a workaholic, who loves travelling and listening
         to music. He prioritises work over anything else, but family is also among his top priorities.
          He is mostly an introvert, but opens up once he is comfortable with the surroundings.
           Extravaganza is a big NO NO for him, because he likes things subtle and expressive! 
           He is very particular about tidying up of his clothes and other belongings, so finding 
           them in a state of mess is his worst nightmare! In short he is a very tidy person..`
      },
    ];
    return (
      <Fragment>
        <h2 className="section-header" id="bride-groom">Bride & Groom</h2>
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