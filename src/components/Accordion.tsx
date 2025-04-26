import { Disclosure, DisclosureButton, DisclosurePanel   } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Accordion({title, content}: {title: string, content: string}) {
  return (
    <Disclosure as="div" className="w-full max-w-md">
      <DisclosureButton className="p-2 bg-gray-100 w-full border-b text-left flex justify-between items-center">
        {title}
        <ChevronDownIcon className="h-5 w-5" />
      </DisclosureButton>
      <div className="overflow-hidden">
      <DisclosurePanel 
      transition
      className="origin-top transition duration-200 ease-out data-closed:-translate-y-10 data:closed:opacity-0  text-gray-500">
        {content}
      </DisclosurePanel>
      </div>
    </Disclosure>
  );
}