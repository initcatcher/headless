import { Dialog, DialogPanel, DialogTitle, Description } from "@headlessui/react";
import { useState } from "react";

export default function MyDialog(){

  const [open, setOpen] = useState(false);
  return (
    <>
    <button onClick={() => setOpen(true)} className="bg-blue-500 text-white p-2 rounded-md">다이얼로그 테스트</button>
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogPanel>
        <DialogTitle>
          <h1>Hello world</h1>
        </DialogTitle>
        <Description>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </Description>
      </DialogPanel>
    </Dialog>
    </>
  )
}