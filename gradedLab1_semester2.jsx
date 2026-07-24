import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ClassList from './ClassList';

export default function App() {
  // State: array of class objects
  const [classes, setClasses] = useState([
    { id: 1, name: 'Yoga', trainer: 'Alice', slots: 5 },
    { id: 2, name: 'Pilates', trainer: 'Bob', slots: 3 },
    { id: 3, name: 'Zumba', trainer: 'Charlie', slots: 0 }
  ]);

  // useEffect: log whenever bookings change
  useEffect(() => {
    console.log('Class bookings updated.');
  }, [classes]);

  // Function to handle booking
  const handleBook = (id) => {
    setClasses(prevClasses =>
      prevClasses.map(c =>
        c.id === id && c.slots > 0
          ? { ...c, slots: c.slots - 1 }
          : c
      )
    );
  };

  return (
    <div>
      <Header />
      <ClassList classes={classes} onBook={handleBook} />
      <Footer />
    </div>
  );
}
