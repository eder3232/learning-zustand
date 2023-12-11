'use client'
import * as Dialog from '@radix-ui/react-dialog'

const Page = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen w-full">
      <h1 className="text-3xl font-bold text-primary">Todo App</h1>
      <div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="btn btn-primary">Add Task</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="data-[state=open]:animate-overlayShow" />
            <Dialog.Content className="modal-box fixed top-[50%] left-[50%] max-w-[450px] translate-x-[-50%] translate-y-[-50%]">
              <Dialog.Title>Add Task</Dialog.Title>
              <Dialog.Description />
              <input type="text" />

              <Dialog.Close asChild>
                <button className="btn btn-primary">Close</button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="  ">Edit profile</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="data-[state=open]:animate-overlayShow" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                Edit profile
              </Dialog.Title>
              <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                Make changes to your profile here. Click save when youre done.
              </Dialog.Description>

              <Dialog.Close asChild>
                <button
                  className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  {/* <Cross2Icon /> */}
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <div className="flex items-center justify-center h-96 w-3/4 bg-base-200 gap-4">
        <div className="h-full w-1/3 p-4 bg-base-300">
          <h2 className="text-2xl font-bold text-primary">Open</h2>
          <div>{/* tasks */}</div>
        </div>
        <div className="h-full w-1/3 p-4 bg-base-300">
          <h2 className="text-2xl font-bold text-primary">In Progress</h2>
        </div>
        <div className="h-full w-1/3 p-4 card bg-base-300">
          <h2 className="text-2xl font-bold text-primary">Done</h2>
        </div>
      </div>
    </div>
  )
}

export default Page
