import React, { useEffect, useState } from "react";
import * as Geocoding from "esri-leaflet-geocoder";
import L from "leaflet";
import { countries } from "country-data";
import PropTypes from "prop-types";

const DisplayMap = ({ location }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     address: {},
  //   };

  //   this.defineAddress = this.defineAddress.bind(this);
  //   this.geocodeCoords();
  // }

  const [address, setAddress] = useState({});

  const defineAddress = (error, result) => {
    if (error) {
      setAddress({ PlaceName: "Location is not defined" });
    }
    setAddress(() => ({ address: result.address }));
  };

  const geocodeCoords = () => {
    const geocodeService = Geocoding.geocodeService();
    geocodeService
      .reverse()
      .latlng(L.latLng(location.latitude, location.longitude))
      .language("en")
      .run(defineAddress);
  };

  useEffect(() => {
    geocodeCoords();
  }, [location]);

  const { PlaceName, City, CountryCode } = address;

  return (
    <>
      <div>{PlaceName}</div>
      {City && City !== "" && <div>{City}</div>}
      {CountryCode &&
        CountryCode !== "" &&
        PlaceName !== countries[CountryCode].name && (
          <div>{countries[CountryCode].name}</div>
        )}
    </>
  );
};

DisplayMap.propTypes = {
  location: PropTypes.object,
};

DisplayMap.defaultProps = {
  location: {},
};

export default DisplayMap;
