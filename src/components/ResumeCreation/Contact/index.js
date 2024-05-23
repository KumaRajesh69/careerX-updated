import Stepper from "../../PageComponents/Highlight/Stepper";
import ContactForm from "../../Forms/ContactForm";
import PreviewGuid from "../../Common/PreviewGuid";

function Contact() {
  return (
    <div>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="w-[90%] mx-auto mt-5">
            <div className="hidden md:block">
              <Stepper
                steps={[
                  { name: "Contact", active: true, href: "/contact" },
                  {
                    name: "Experience",
                    completed: true,
                    href: "/workexperience",
                  },
                  { name: "Education", completed: true, href: "/education" },
                  { name: "Skills", completed: true, href: "/skills" },
                  { name: "Extras", completed: true, href: "/highlights" },
                  { name: "Summary", completed: true, href: "/summary" },
                ]}
              />
            </div>
            <div className="flex justify-between my-8 ">
              <div className="">
                <p className="font-bold md:text-3xl font-bricolage-grotesque">
                  Please enter your contact info
                </p>
              </div>
              <div className="flex items-start  cursor-pointer">
                <img src="/img2/tips.svg" className="mt-1 mr-1" />
                <p className="text-[#305EFF] font-semibold text-base">Tips</p>
              </div>
            </div>
            <ContactForm />
          </div>
          {/* <Accordion data={data} /> */}
        </div>
        {/* <div class="w-3/12"> */}
        <div className="md:col-span-5 bg-[#f5f7ff]">
          <div className=" w-full h-screen bg-[#f5f7ff] ">
            <PreviewGuid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
