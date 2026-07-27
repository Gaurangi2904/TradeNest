import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container py-5">

      <div className="row align-items-center">

        <div className="col-lg-6">

          <img
            src={imageURL}
            alt={productName}
            className="img-fluid product-image"
          />

        </div>

        <div className="col-lg-6">

          <h2 className="fw-bold mb-4">
            {productName}
          </h2>

          <p
            style={{
              color: "var(--secondary-text)",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            {productDescription}
          </p>

          <div className="mt-4">

            <a
              href={tryDemo}
              className="btn btn-primary me-3"
            >
              Try Demo
            </a>

            <a
              href={learnMore}
              className="btn btn-outline-primary"
            >
              Learn More
            </a>

          </div>

          {(googlePlay || appStore) && (

            <div className="mt-4">

              {googlePlay && (
                <img
                  src={googlePlay}
                  alt="Google Play"
                  style={{
                    width: "160px",
                    marginRight: "15px",
                  }}
                />
              )}

              {appStore && (
                <img
                  src={appStore}
                  alt="App Store"
                  style={{
                    width: "160px",
                  }}
                />
              )}

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default LeftSection;