// this file is under app folder layoutfile 
import React from "react";
import "./../public/styles/globals.css"; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Quiz App</title>
      </head>
      <body>
        <div className="app-container">
          <header>
            <h1>Subham Quiz Game</h1>
          </header>
          <main>{children}</main>
          <footer>
            <p>Quiz App - 2024</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
