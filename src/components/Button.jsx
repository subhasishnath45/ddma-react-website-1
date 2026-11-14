import React from "react";

/*

<Button link='https://example.com/about' classes='btn' identifier='about-btn'>read more about us</Button>

props = {
  children: "read more about us",
  link: "https://example.com/about",
  classes: "btn",
  identifier: "about-btn"
}

<Button link='https://example.com/vision' classes='btn' identifier='vision-btn'>read more about our vision</Button>

props = {
  children: "read more about our vision",
  link: "https://example.com/vision",
  classes: "btn",
  identifier: "vision-btn"
}

props.children
props.link
props.classes

*/
const Button = ({ children, link, classes, identifier }) => {
  return (
    <>
      <a href={link} className={classes} id={identifier}>
        {children}
      </a>
    </>
  );
};

export default Button;
