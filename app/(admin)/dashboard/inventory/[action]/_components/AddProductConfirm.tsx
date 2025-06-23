"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

interface Props {
  setConfirmOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddProductConfirm({ setConfirmOpen }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className="w-full h-full">Save</p>
      </AlertDialogTrigger>
      <AlertDialogContent className="py-10">
        <AlertDialogHeader className="flex flex-col items-center gap-2 mb-6">
          <Image
            src="/images/confirmSave.svg"
            width={86}
            height={81}
            alt="alert"
          />
          <AlertDialogTitle>
            You&apos;re about to save this product.
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <AlertDialogAction
              className="bg-primaryRed w-1/2 text-md"
              onClick={() => setConfirmOpen(true)}
            >
              Yes, Save
            </AlertDialogAction>
            <AlertDialogCancel className="w-1/2 text-md">
              Cancel
            </AlertDialogCancel>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
