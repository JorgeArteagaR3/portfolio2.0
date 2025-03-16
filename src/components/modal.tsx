import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open?: boolean;
  toggleModal?: () => void;
  scrollabe?: boolean;
};
const CVs = [
  {
    title: "English",
    url: "https://drive.google.com/file/d/1p_QdKXEr7p5Jy8x3aPRcM2QGsjko5Acp/view?usp=drive_link",
  },
  {
    title: "Spanish",
    url: "https://drive.google.com/file/d/1FB-91cabt3375NGpZBgY0benBKwk_CfE/view?usp=drive_link",
  },
];
export default function Modal({ open, toggleModal, scrollabe }: ModalProps) {
  useEffect(() => {
    if (scrollabe) return;

    const body = document.body;

    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [open, scrollabe]);

  return createPortal(
    <div
      className={cn(
        "h-screen w-screen fixed top-0 duration-300 items-center opacity-0 invisible",
        open && "flex opacity-100 visible"
      )}
    >
      <div
        className="absolute size-full bg-black/80 z-40"
        onClick={toggleModal}
      ></div>

      <div className={cn("flex mx-auto gap-4", !open && "hidden")}>
        {CVs.map((cv) => (
          <a
            href={cv.url}
            target="_blank"
            className="z-50 flex gap-2 mx-auto border-[#a4a7ff1f] border-2 px-4 py-2 text-base rounded-full bg-mybackground hover:fill-darkpurple hover:text-darkpurple duration-200"
          >
            {cv.title}
          </a>
        ))}
      </div>
    </div>,
    document.body
  );
}
