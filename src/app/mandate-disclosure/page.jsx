
import { mandateDisclosureSections } from "../../data/mandateDisclosureSections";
import MandateDisclosureInfo from "@/components/global/MandateDisclosureInfo";

export const metadata = {
  title: "Mandatory Disclosure — Genesis",
};

export default function MandateDisclosure() {
  return (
    <div className="bg-gray-50 text-slate-900 antialiased font-lato">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {mandateDisclosureSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-10 mb-6 tracking-wide">
              {section.title}
            </h3>
            <MandateDisclosureInfo section={section} />
          </div>
        ))}
      </div>
    </div>
  );
}
