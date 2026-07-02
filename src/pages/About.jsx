import "./About.css";

// About page is fully static - no props or state needed here.
function About() {
  const values = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To bring delicious, high-quality food to your doorstep with speed, care, and a smile.",
    },
    {
      icon: "🍽️",
      title: "Quality Food",
      description:
        "Every dish is prepared with fresh ingredients and love, so every bite feels like home.",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      description:
        "We know you're hungry! Our team works hard to get your order to you as quickly as possible.",
    },
    {
      icon: "😊",
      title: "Customer Satisfaction",
      description:
        "Your happiness is our priority. We're always listening and improving based on your feedback.",
    },
  ];

  return (
    <div className="about-page container">
      <div className="section-heading">
        <h2>About TastyHub</h2>
        <p>Serving happiness, one meal at a time</p>
      </div>

      <div className="about-intro">
        <p>
          TastyHub started with a simple idea — great food should be easy to
          order and enjoy. We partner with the best kitchens to bring you a
          variety of dishes, from comforting classics to bold new flavors,
          all in one place.
        </p>
      </div>

      <div className="values-grid">
        {values.map((value) => (
          <div className="value-card" key={value.title}>
            <span className="value-icon">{value.icon}</span>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
