import { Dialog, DialogContent, DialogTitle } from "@/components/ui";
import ViewProduct from "../../../_components/ViewProduct";

export function ProductDialog({
  id,
  open,
  onOpenChange,
}: {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogTitle>View Product Details</DialogTitle>
        ///////////////////////////حطي حاجات البرودكت هنا بس مش جوا ديالوج تاني
        وممكن تحطيهم هنا ع طول متعمليش الكومبوننت الي تحت ده
        <ViewProduct id={id} />
      </DialogContent>
    </Dialog>
  );
}
