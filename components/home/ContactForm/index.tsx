import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { CircleDashed, SendHorizonal } from "lucide-react";

type SuccessAlertProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SuccessAlert({ open, onOpenChange }: SuccessAlertProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Message sent!</AlertDialogTitle>
          <AlertDialogDescription>
            Thanks for reaching out! I'll get back to you as soon as possible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = () => {
      setLoading(false);
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setSuccessAlertOpen(true);
        form.reset();
      } else {
      }
    };

    setLoading(true);
    xhr.send(data);
  }

  return (
    <>
      <SuccessAlert
        open={successAlertOpen}
        onOpenChange={setSuccessAlertOpen}
      />
      <form
        action="https://formspree.io/f/xleoawej"
        method="POST"
        className="flex flex-col gap-3 max-w-[624px] w-full mx-auto"
        onSubmit={onSubmit}
      >
        <Input type="text" id="name" name="name" placeholder="Name" required />
        <Input
          type="email"
          id="email"
          placeholder="Email"
          name="_replyto"
          required
        />
        <Textarea
          className="mb-4"
          name="message"
          placeholder="Your message..."
          required
        />

        <Button
          className="bg-indigo-600 hover:bg-indigo-500 text-slate-200"
          disabled={loading}
        >
          {loading ? (
            <CircleDashed className="animate-spin" />
          ) : (
            <>
              Submit <SendHorizonal size={18} className="ml-2" />
            </>
          )}
        </Button>
      </form>
    </>
  );
}
