const bodyParser = require("body-parser");
const app = require("express")();

app.use(bodyParser.json());

app.all("/footer", (req, res) => {
  try {
    const footerData = {
      siteName: "Quote.com",
      siteLogoUrl:
        "https://www.quote.com/wp-content/uploads/2021/05/Quotecom-Logo-01.svg",
      socialLinks: [
        {
          name: "Twitter",
          link: "https://twitter.com/quote",
          icon: "bi-twitter",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/quote/",
          icon: "bi-instagram",
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com/quote/",
          icon: "bi-facebook",
        },
      ],
      sections: [
        {
          name: "Company",
          options: [
            { name: "About Us", link: "/about-us" },
            { name: "Careers", link: "/careers" },
            { name: "Press & Media", link: "/press-media" },
            { name: "Blog", link: "/blog" },
            { name: "Contact Us", link: "/contact-us" },
            { name: "Privacy Policy", link: "/privacy-policy" },
            { name: "Terms of Service", link: "/terms-of-service" },
          ],
        },
        {
          name: "Services",
          options: [
            { name: "Insurance Quotes", link: "/insurance-quotes" },
            { name: "Loan Options", link: "/loan-options" },
            { name: "Credit Scores", link: "/credit-scores" },
            { name: "Comparison Tools", link: "/comparison-tools" },
            { name: "Partner Services", link: "/partner-services" },
          ],
        },
        {
          name: "Resources",
          options: [
            { name: "Help Center", link: "/help-center" },
            { name: "Customer Reviews", link: "/customer-reviews" },
            { name: "Learning Center", link: "/learning-center" },
            { name: "Site Map", link: "/site-map" },
            { name: "Accessibility", link: "/accessibility" },
          ],
        },
      ],
    };

    res.json(footerData);
  } catch (error) {
    console.error("Error in footer API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;
