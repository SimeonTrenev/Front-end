import React from "react";
import TableOffersHeader from "./TableOffersHeader";
import OfferRows from "./OfferRows";
import '../CSS/index.css';

export default function TableOffers(props) {
//   console.log(props.offers);
  return (
    <table className="table table-striped table-bordered" id="table-bordered">
      <TableOffersHeader />
      <OfferRows offers={props.offers} />
    </table>
  );
}
