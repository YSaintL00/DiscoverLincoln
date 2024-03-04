import React from "react";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/DashboardSidebar";
import Image from "next/image";

const requiredAsterisk = (
  <Image
    alt="Required Answer Asterisk"
    src="/asterisk.svg"
    width="6"
    height="7"
  />
);

export default function editProfileTab() {
  return (
    <>
      <div className="editProfile" id="dashboard">
        <Dashboard />

        <div className="pageFormat">
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <div className="form">
              <h1 className="title">Edit Profile</h1>

              <div className="inRow">
                <div>
                  <div className="icon-text">
                    <label htmlFor="firstName">First name</label>
                    {requiredAsterisk}
                  </div>
                  <input
                    className="textboxStyles"
                    type="text"
                    id="firstName"
                    name="firstName"
                    // value={inputs.firstName || ""}
                    // onChange={handleChange}
                    placeholder="John"
                    size="40"
                    required
                  />
                </div>

                <div>
                  <div className="icon-text">
                    <label htmlFor="lastName">Last name</label>
                    {requiredAsterisk}
                  </div>
                  <input
                    className="textboxStyles"
                    type="text"
                    id="lastName"
                    name="lastName"
                    // value={inputs.lastName || ""}
                    // onChange={handleChange}
                    placeholder="Doe"
                    size="40"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="icon-text">
                  <label htmlFor="email">Email</label>
                  {requiredAsterisk}
                </div>
                <input
                  className="textboxStyles"
                  type="email"
                  id="email"
                  name="email"
                  // value={inputs.email || ""}
                  // onChange={handleChange}
                  placeholder="Enter email address"
                  size="100"
                  required
                />
              </div>

              <div>
                <div className="icon-text">
                  <label htmlFor="phone">Phone Number</label>
                  {requiredAsterisk}
                </div>
                <input
                  className="textboxStyles"
                  type="tel"
                  id="phone"
                  name="phone"
                  // value={inputs.email || ""}
                  // onChange={handleChange}
                  placeholder="+1-(000)-000-0000"
                  size="100"
                  required
                />
              </div>

              <div>
                <div className="icon-text">
                  <label htmlFor="address">Address</label>
                  {requiredAsterisk}
                </div>
                <input
                  className="textboxStyles"
                  type="text"
                  id="address"
                  name="address"
                  // value={inputs.email || ""}
                  // onChange={handleChange}
                  placeholder="123 Figma Ave"
                  size="100"
                  required
                />
              </div>

              <div className="inRow">
                <div>
                  <div className="icon-text">
                    <label htmlFor="state">State</label>
                    {requiredAsterisk}
                  </div>
                  <input
                    className="textboxStyles"
                    type="text"
                    id="state"
                    name="state"
                    // value={inputs.state || ""}
                    // onChange={handleChange}
                    placeholder="ON"
                    size="40"
                    required
                  />
                </div>

                <div>
                  <div className="icon-text">
                    <label htmlFor="city">City</label>
                    {requiredAsterisk}
                  </div>
                  <input
                    className="textboxStyles"
                    type="text"
                    id="city"
                    name="city"
                    // value={inputs.state || ""}
                    // onChange={handleChange}
                    placeholder="TO"
                    size="40"
                    required
                  />
                </div>
              </div>

              <div className="inRow">
                <div>
                  <div className="icon-text">
                    <label htmlFor="postalCode">Postal Code</label>
                    {requiredAsterisk}
                  </div>
                  <input
                    className="textboxStyles"
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    // value={inputs.state || ""}
                    // onChange={handleChange}
                    placeholder="ABC 123"
                    size="40"
                    required
                  />
                </div>
                <div>
                  <div className="icon-text">
                    <label htmlFor="country">Country</label>
                    {requiredAsterisk}
                  </div>
                  <input
                    className="textboxStyles"
                    type="text"
                    id="country"
                    name="country"
                    // value={inputs.state || ""}
                    // onChange={handleChange}
                    placeholder="CAN"
                    size="40"
                    required
                  />
                </div>
              </div>
             
              <div>
                <div className="buttonRow">
                  <button className="cancelButton">Cancel</button>
                  <button type="submit" className="saveButton">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
