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

export function AddProductConfirm() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <p>Save</p>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader className="flex flex-col items-center justify-center gap-4">
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
                        <AlertDialogAction className="bg-primaryRed w-xxs px-10">
                            Yes, Save
                        </AlertDialogAction>
                        <AlertDialogCancel className="w-xxs px-12">
                            Cancel
                        </AlertDialogCancel>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
