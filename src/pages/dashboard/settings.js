import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/DashboardSidebar";

export default function settingsTab() {

  return (
    <>
      <div className="dashboard-page" id="settings">
        <Dashboard />
        <div className="accSettings">
          <h1 className="pageTitle">Account Settings</h1>
          <div>
            <form>
              <div className="settingGaps">
                <h2>Username</h2>
                <h3>
                  Your current username is <b>user123@gmail.com</b>
                </h3>
                <div>
                  <label for="newUsername">
                    <b>New Username</b>
                  </label>
                  <br></br>
                  <input
                    className="textboxes"
                    type="text"
                    id="newUsername"
                    name="newUsername"
                    placeholder="New Username"
                    size="40"
                  ></input>
                </div>
                <button className="changesButton">Change Username</button>
              </div>
            </form>
          </div>

          {/* password */}
          <div>
            <form>
              <div className="settingGaps">
                <h2>Password</h2>

                <div>
                  <label for="currPassword">
                    <b>Current Password</b>
                  </label>
                  <br></br>
                  <input
                    className="textboxes"
                    type="password"
                    id="currPassword"
                    name="currPassword"
                    placeholder="Enter current password"
                    size="40"
                  ></input>
                </div>

                <div>
                  <label for="newPassword">
                    <b>New Password</b>
                  </label>
                  <br></br>
                  <input
                    className="textboxes"
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="Enter new password"
                    size="40"
                  ></input>
                </div>

                <div>
                  <label for="confirmPassword">
                    <b>Confirm Password</b>
                  </label>
                  <br></br>
                  <input
                    className="textboxes"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    size="40"
                  ></input>
                </div>

                <button
                  className="changesButton"
                  type="submit"
                >
                  <b>Change Password</b>
                </button>
              </div>
            </form>
          </div>
          {/* Delete Account */}
          <div className="deleteAcc">
            <h2>Delete Account</h2>
            <h3>
              Deleting your account will permanently remove your profile
              information and posted events.
            </h3>
            <button className="deleteButton">Delete this account</button>
          </div>
        </div>
      </div>
    </>
  );
}
