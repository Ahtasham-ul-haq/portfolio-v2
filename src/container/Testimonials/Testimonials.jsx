import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonials.scss";

const testimonials = []

const Testimonials = () => {
  const [brands, setBrands] = useState([])
  const [Testimonials, setTestimonials] = useState([])
  const [curentIndex, setCurentIndex] = useState()

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testiminials-item app__flex"></div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonials'),
  'testimonials',
  'app__primarybg  '
);
