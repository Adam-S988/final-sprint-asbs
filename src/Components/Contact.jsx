import React from "react";

const Contact = () => {
  return (
    <>
      <p>
        For any questions or concerns, don't hesitate to get ahold of us. To
        assure swift response, please fill out the following form.
      </p>
      <form action="/data" method="get" id="registration">
        <label for="firstname"> First Name </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          autofocus
          autocomplete="given-name"
          placeholder="Your first name here"
          maxlength="50"
          tabindex="2"
          class="form-control m-2 p-3"
        />
        <br />
        <label for="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Your last name here"
          tabindex="3"
          class="form-control"
        />
        <br />
        <label for="phonenumber">Phone Number</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          placeholder="Your phone number here"
          tabindex="4"
          class="form-control"
        />
        <br />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autocomplete="email"
          placeholder="Your email here"
          tabindex="5"
          class="form-control"
        />
        <br />
        <label for="comments">Comments</label>
        <textarea
          name="comments"
          id="comments"
          rows="10"
          cols="20"
          placeholder="Your questions or comments here"
          tabindex="6"
          class="form-control"
        ></textarea>

        <br />
        <input type="submit" value="Submit" class="form-control" />
        <input type="reset" value="Clear" class="form-control" />
      </form>
    </>
  );
};

export default Contact;
