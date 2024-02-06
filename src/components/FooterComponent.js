import React from 'react';

const FooterComponent = () => {
    return (
        <div>
            {/* Footer element with a className 'footer' */}
            <footer className='footer'>
                {/* Text displaying 'All Rights Reserved ©' followed by the current year */}
                <span>All Rights Reserved &copy; {new Date().getFullYear()}</span>
            </footer>
        </div>
    );
};

export default FooterComponent;

// Functional Component:

// FooterComponent is a functional component that represents the footer of your application.
// HTML Structure:

// The component returns a div element containing a footer element.
// Footer Element:

// The footer element has a className of 'footer', which can be styled with CSS.
// Inside the footer, there's a span element that displays text.
// The text includes "All Rights Reserved" followed by the copyright symbol (&copy;) and the current year obtained dynamically using new Date().getFullYear().
// Export:

// The component is exported to be used in other parts of the application.
// This FooterComponent is a common pattern for displaying a copyright notice at the bottom of a web page. You can customize the text or styling according to your application's design.




