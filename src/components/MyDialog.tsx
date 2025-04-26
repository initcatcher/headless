import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from '@headlessui/react'
import { useState } from 'react'

export default function MyDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer" onClick={() => setOpen(true)}>
        결제하기
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 w-screen overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold">Deactivate account</DialogTitle>
              <div className="scheme-light bg-white rounded-lg px-6 py-8 shadow-lg dark:bg-gray-800 ring-gray-900/5 ring">
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg ">
                    <svg className="h-6 w-6 stroke-white">
                      <path d="M12 20l4-16m4 4l4-4m-8 8l4-4m-4 4l-4 4" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes upside-down</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                  The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
              </div>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <Description>This will permanently deactivate your account</Description>
              <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
              <div className="flex gap-4">
                <button onClick={() => setOpen(false)}>Cancel</button>
                <button onClick={() => setOpen(false)}>Deactivate</button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
