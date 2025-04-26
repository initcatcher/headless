import { Disclosure, DisclosureButton, DisclosurePanel   } from "@headlessui/react";
export default function Accordion() {
  return (
    <Disclosure as="div" className="w-full max-w-md">
      <DisclosureButton className="py-2 bg-gray-100 w-full border-b pb-2 text-right">
        hello world!
      </DisclosureButton>
      <div className="overflow-hidden py-2">
      <DisclosurePanel 
      transition
      className="origin-top transition duration-200 ease-out data-closed:-translate-y-10 data:closed:opacity-0  text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </DisclosurePanel>
      </div>
    </Disclosure>
  );
}