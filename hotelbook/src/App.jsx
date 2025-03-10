import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Headers';
import Footer from './Footers';
import Visits from './Visit';
import Contacts from './Contact';
import HeaderContent from './Defaultpage';
import Login from './Login';
import { Place1, Place2, Place3, Place4, Places1, Places2, Places3, Places4, Places5, Places6, Places7, Places8, Places9 } from './Locationplaces';
import { DesPlace1, DesPlace2, DesPlace3, DesPlace4, DesPlace5, DesPlace6, DesPlace7, DesPlace8 } from './Destinationplaces';
import { Offerpage, Offering } from './Offerspage';
import SignUp from './Signup';
import BookingForm from './Bookingform';
import Favourite from './Favourites';
import Reserved from './Reserved';
import WelcomePage from './WelcomePage';

export function App() {
  const [isBookingStarted, setIsBookingStarted] = useState(false);

  return (
    <>
      {!isBookingStarted ? (
        <WelcomePage onStart={() => setIsBookingStarted(true)} />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HeaderContent />} />
            <Route path="/visit" element={<Visits />} />
            <Route path="/contact" element={<Contacts />} />  
            <Route path="/favourites" element={<Favourite />} />
            <Route path="/reserved" element={<Reserved />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/offers/claim" element={<><Offerpage /><Offering /></>} />
            <Route path="/hotel/LemonTreeHotelWhite" element={<Place1 />} />
            <Route path="/hotel/Vividus" element={<Place2 />} />
            <Route path="/hotel/HotelCityTower" element={<Place3 />} />
            <Route path="/hotel/HotelChanchalContinental" element={<Place4 />} />
            <Route path="/hotel/OliceZipKoramangala" element={<Places1 />} />
            <Route path="/hotel/FabHotelRoyalStay" element={<Places2 />} />
            <Route path="/hotel/GreenMeadowsResort" element={<Places3 />} />
            <Route path="/hotel/RajParkHotel" element={<Places4 />} />
            <Route path="/hotel/TheSt.RegisMumbai" element={<Places5 />} />
            <Route path="/hotel/TajFalaknumaPalace" element={<Places6 />} />
            <Route path="/hotel/HyattRonilGoa" element={<Places7 />} />
            <Route path="/hotel/HowardJohnsonbyWyndham" element={<Places8 />} />
            <Route path="/hotel/HotelORSQUAREHOMES" element={<Places9 />} />
            <Route path="/city/NewDelhi" element={<DesPlace1 />} />
            <Route path="/city/Bangalore" element={<DesPlace2 />} />
            <Route path="/city/Mumbai" element={<DesPlace3 />} />
            <Route path="/city/Chennai" element={<DesPlace4 />} />
            <Route path="/city/Hyderabad" element={<DesPlace5 />} />
            <Route path="/city/Goa" element={<DesPlace6 />} />
            <Route path="/city/Kolkata" element={<DesPlace7 />} />
            <Route path="/city/HimachalPradesh" element={<DesPlace8 />} />
            <Route path="/bookingform" element={<BookingForm />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
