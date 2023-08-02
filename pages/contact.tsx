import InputField from "@Components/InputField";
import Image from "next/image";

const Contact = () => {
  return (
    <div className=" lg:px-36 p-10  space-y-10 h-full py-10">
      <h1 className="text-4xl font-medium">
        Turn ideas into <span className="text-att_primary">reality!</span>
      </h1>
      <div className="lg:flex  lg:space-x-32 justify-center items-center">
        <Image
          src="/images/Contact_Art_Cover.png"
          height={588}
          width={617}
          alt="Contact cover art"
        />
        <form className="lg:w-1/3 space-y-5 ">
          <div className="lg:space-x-5 space-y-5 lg:space-y-0 lg:flex">
            <InputField
              label="First name"
              placeholder="Enter your first name"
            />
            <InputField label="Last name" placeholder="Enter your last name" />
          </div>

          <InputField label="Email" placeholder="Enter your email" />
          <InputField
            label="Phone number"
            placeholder="Enter your phone number"
          />
          <InputField label="Message" placeholder="Enter your message" />
          <button className="bg-att_primary p-2 rounded-md w-full font-medium text-lg">
            Let’s discover possibilities
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
