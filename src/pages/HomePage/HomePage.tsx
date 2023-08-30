import { Fragment } from "react";
import Button from "../../components/Button/Button";
import HomeDataGrid from "./HomeDataGrid";
import Footer from "../../components/Footer/Footer";
import { ButtonType, ButtonSize } from "../../components/Button/types";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="home-page">
        <div className="home-page__header">
          <div className="home-page__header-content">
            <h1>
              Who <span className="header-page-span">not</span> to rent your
              apartment to?
            </h1>
            <div className="home-page__header-content--text">
              <p className="text">
                Find out which tenents didn't pay for their rentals or left the
                place in a mess. Register and find the necessary information.
              </p>
            </div>
            <Button
              buttonType={ButtonType.PRIMARY}
              buttonSize={ButtonSize.LARGE}
              text="Register"
              onClick={() => navigate("/register")}
            />
          </div>
          <div className="home-page__header-image"></div>
        </div>

        <div className="home-page__comunity">
          <div className="home-page__comunity-image"></div>
          <div className="home-page__comunity-content">
            <span className="header-page-span--small">
              Help fellow landloards
            </span>
            <h2>Become part of a comunity</h2>
            <p className="text">
              that alers other landloards of tenents that damaged their property
              or didn't pay for rent. Register and leave information about bad
              experience to prevent others from having it.
            </p>
            <Button
              buttonType={ButtonType.PRIMARY}
              buttonSize={ButtonSize.LARGE}
              text="Report tenant"
              onClick={() => console.log("Report tenant clicked")}
            />
          </div>
        </div>

        <div className="home-page__demo">
          <h2>Demo list</h2>
          <p className="text">
            Because of our terms of use and privacy policy the real list can be
            shown when a user is registrated. We respect the privacy and data of
            our community.
          </p>
        </div>

        <HomeDataGrid />
      </div>
      <Footer />
    </Fragment>
  );
}
