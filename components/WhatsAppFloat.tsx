const phone = '0658587458';
const waNumber = phone.startsWith('0') ? `212${phone.slice(1)}` : phone;
const waLink = `https://wa.me/${waNumber}`;

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[1200] group"
    >
      <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-2 border-black bg-[#25D366] shadow-[3px_3px_0px_#0A0A0A] transition-all group-hover:bg-black group-hover:shadow-[5px_5px_0px_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-7 w-7 md:h-8 md:w-8 text-white group-hover:text-[#25D366]"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.61 0 .38 5.22 .38 11.64c0 2.05 .54 4.05 1.57 5.82L0 24l6.72-1.77a11.6 11.6 0 0 0 5.33 1.36h.01c6.43 0 11.66-5.22 11.66-11.64 0-3.11-1.21-6.04-3.2-8.07Zm-8.48 18.3h-.01a9.56 9.56 0 0 1-4.88-1.35l-.35-.2-3.98 1.04 1.06-3.88-.23-.4a9.53 9.53 0 0 1-1.44-5.05c0-5.26 4.29-9.54 9.57-9.54 2.55 0 4.94 1 6.74 2.8a9.48 9.48 0 0 1 2.78 6.74c0 5.26-4.29 9.54-9.56 9.54Zm5.25-7.14c-.29-.15-1.7-.84-1.97-.94-.27-.1-.46-.15-.66 .15-.2 .29-.76 .94-.93 1.13-.17 .2-.35 .22-.64 .07-.29-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45 .13-.6 .14-.14 .29-.35 .44-.52 .15-.17 .2-.29 .29-.49 .1-.2 .05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52 .07-.79 .37-.27 .29-1.04 1.02-1.04 2.5 0 1.47 1.06 2.9 1.21 3.1 .15 .2 2.09 3.2 5.07 4.48 .71 .31 1.27 .5 1.7 .64 .71 .23 1.35 .2 1.86 .12 .57-.08 1.7-.69 1.94-1.35 .24-.66 .24-1.22 .17-1.35-.07-.12-.27-.2-.56-.35Z" />
        </svg>
      </span>
    </a>
  );
}
