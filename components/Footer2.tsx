import React from "react";

const Footer = () => {
  return (
    <footer className="text-[24px] bg-[#001f5c] p-[20px] text-[#f9f5ff] flex flex-col justify-between items-center flex-wrap gap-x-[20px] gap-y-[10px]">
      <div className="w-full flex justify-between gap-10 pb-6 mb-3 border-b-2 md:flex-nowrap flex-wrap">
        <div className="w-full flex flex-col gap-y-[10px] md:max-w-[400px]">
          <h3 className="font-bold cursor-pointer text-lg">
            Halal Dollars Support Channels
          </h3>
          <p className="font-semibold text-[14px]">
            Kindly allow 24 hours for any pending or unsuccessful transactions
            to process. After that time, please reach out, and we'll be glad to
            assist you further
          </p>
        </div>
        <div className="text-sm font-[500]">
          <p className="text-base">Support:</p>
          <p>
            ✅ Phone Call:{" "}
            <span className="text-[#12a8ff]">+234 704 572 8507</span>
          </p>
          <p>
            ✅ WhatsApp Call/Chat:{" "}
            <span className="text-[#12a8ff]">+234 704 572 8507</span>
          </p>
          <p>
            ✅ Email:{" "}
            <span className="text-[#12a8ff]">support@halaldollars.ng</span>
          </p>
          <p>
            ✅ Contact Form:{" "}
            <span className="text-[#12a8ff]">halaldollars.ng/contact</span>
          </p>
          <p>
            ✅ Click{" "}
            <a
              target="_blank"
              className="text-[#12a8ff]"
              href="https://chat.whatsapp.com/Ln2NpifERYz0Vai3urqWJi"
            >
              here
            </a>{" "}
            to join our WhatsApp Group
          </p>
        </div>
      </div>
      <p className="text-sm font-semibold mb-6">
        &copy; Halal Dollars Company. All Rights Reserved{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
